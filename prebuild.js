// const fs = require('fs');
// const path = require('path');
// const https = require('https');
// const axios = require('axios');
// const { promisify } = require('util');
// const stream = require('stream');

// const finished = promisify(stream.finished);

// // غیرفعال کردن SSL verification برای توسعه
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// // یا با ایجاد axios instance مخصوص
// const axiosInstance = axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   }),
//   timeout: 30000
// });

// async function downloadFile(fileUrl, outputPath) {
//   const writer = fs.createWriteStream(outputPath);
  
//   try {
//     const response = await axiosInstance({
//       method: 'GET',
//       url: fileUrl,
//       responseType: 'stream'
//     });
    
//     response.data.pipe(writer);
//     return finished(writer);
//   } catch (error) {
//     writer.close(); // بستن writer در صورت خطا
//     fs.unlink(outputPath, () => {}); // حذف فایل ناقص
//     throw error;
//   }
// }

// async function preBuild() {
//   try {
//     console.log('📡 Fetching file list from API...');
    
//     // 1. دریافت لیست فایل‌ها از API
//     const response = await axiosInstance.get(
//       'http://gateway.mayan-group.com:5300/gateway/cms/api/Website/LoadUnCopiedFiles'
//     );
    
//     // بررسی ساختار response
//     console.log('API Response structure:', response.data ? 'Received data' : 'No data');
    
//     let fileUrls = response.data;
    
//     // اگر response آرایه نیست، سعی کنید به آرایه تبدیل کنید
//     if (!Array.isArray(fileUrls)) {
//       console.log('Response is not an array, checking for nested structure...');
      
//       if (fileUrls && fileUrls.data && Array.isArray(fileUrls.data)) {
//         fileUrls = fileUrls.data;
//       } else if (fileUrls && Array.isArray(fileUrls.files)) {
//         fileUrls = fileUrls.files;
//       } else if (fileUrls && Array.isArray(fileUrls.items)) {
//         fileUrls = fileUrls.items;
//       } else {
//         // اگر نمی‌توان به آرایه تبدیل کرد، خطا بده
//         throw new Error('API response is not in expected format. Expected an array.');
//       }
//     }
    
//     console.log(`📊 Found ${fileUrls.length} files to download`);
    
//     // نمایش چند آیتم اول برای دیباگ
//     if (fileUrls.length > 0) {
//       console.log('Sample item:', JSON.stringify(fileUrls[0], null, 2));
//     }
    
//     // 2. ایجاد پوشه public اگر وجود ندارد
//     const publicDir = path.join(__dirname, 'public', 'downloads');
//     if (!fs.existsSync(publicDir)) {
//       fs.mkdirSync(publicDir, { recursive: true });
//       console.log(`📁 Created directory: ${publicDir}`);
//     }
    
//     // 3. دانلود همه فایل‌ها
//     const downloadPromises = fileUrls.map(async (pictureInfo, index) => {
//       // ساخت URL دانلود - فرض می‌کنیم pictureInfo.Id شناسه فایل است
//       const fileId = pictureInfo.pictureId;
      
//       if (!fileId) {
//         console.warn(`⚠️ No file ID found for item ${index}:`, pictureInfo);
//         return null;
//       }
      
//       // ساخت URL کامل برای دانلود - بسته به API شما ممکن است نیاز به تنظیم URL متفاوت باشد
//       const downloadUrl = `http://localhost:5300/gateway/FileManager/${fileId}`;
    
      
//       const fileName = `${fileId}${pictureInfo.extension}`;
//       const filePath = path.join(publicDir, fileName);
      
//       console.log(`⬇️ Downloading [${index + 1}/${fileUrls.length}]: ${fileName}`);
      
//       try {
//         await downloadFile(downloadUrl, filePath);
        
//         // بررسی اینکه فایل دانلود شده و خالی نیست
//         const stats = fs.statSync(filePath);
//         console.log(`✅ Downloaded: ${fileName} (${formatBytes(stats.size)})`);
        
//         return {
//           id: fileId,
//           path: filePath,
//           size: stats.size,
//           success: true
//         };
//       } catch (error) {
//         console.error(`❌ Failed to download ${fileName}:`, error.message);
//         return {
//           id: fileId,
//           error: error.message,
//           success: false
//         };
//       }
//     });
    
//     const results = await Promise.all(downloadPromises);
    
//     // خلاصه نتایج
//     const successful = results.filter(r => r && r.success);
//     const failed = results.filter(r => r && !r.success);
//     const skipped = results.filter(r => r === null);
    
//     console.log('\n' + '='.repeat(50));
//     console.log('📊 DOWNLOAD SUMMARY:');
//     console.log('='.repeat(50));
//     console.log(`✅ Successful: ${successful.length}`);
//     console.log(`❌ Failed: ${failed.length}`);
//     console.log(`⚠️ Skipped: ${skipped.length}`);
//     console.log(`📁 Total files in directory: ${fs.readdirSync(publicDir).length}`);
    
//     // ذخیره گزارش
//     const report = {
//       timestamp: new Date().toISOString(),
//       total: fileUrls.length,
//       successful: successful.length,
//       failed: failed.length,
//       skipped: skipped.length,
//       details: {
//         successful: successful.map(s => ({ id: s.id, size: s.size })),
//         failed: failed.map(f => ({ id: f.id, error: f.error }))
//       }
//     };
    
//     fs.writeFileSync(
//       path.join(publicDir, 'download-report.json'),
//       JSON.stringify(report, null, 2)
//     );
    
//     console.log('📄 Download report saved to: download-report.json');
    
//   } catch (error) {
//     console.error('❌ Pre-build error:', error.message);
//     console.error('Stack trace:', error.stack);
//     process.exit(1);
//   }
// }

// // تابع کمکی برای فرمت کردن سایز فایل
// function formatBytes(bytes) {
//   if (bytes === 0) return '0 Bytes';
//   const k = 1024;
//   const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//   const i = Math.floor(Math.log(bytes) / Math.log(k));
//   return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
// }

// preBuild();