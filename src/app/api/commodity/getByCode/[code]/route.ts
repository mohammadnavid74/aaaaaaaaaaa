import { NextResponse } from 'next/server';

export const commodities = [
  // ===================== GROUP: VEHICLES =====================
  {
    hierarchyId: 'VEHICLES',
    code: 'VEHICLES',
    title: 'گروه خودروها',
    iconId: 'icon-vehicles',
    hasChildren: true,
    level: 0,

    props: [
      { propType: 1, parent: 'VEHICLES', inherited: false, title: 'توضیحات', value: '<p>انواع خودروهای تجاری و سنگین</p>' },
      { propType: 1, parent: 'VEHICLES', inherited: false, title: 'بنر', value: 'banner-vehicles.webp' },
    ],

    images: [],
    children: [
      // ===================== BRAND: DIMA =====================
      {
        hierarchyId: 'DIMA',
        code: 'DIMA',
        title: 'خودروهای دیما',
        iconId: 'icon-dima',
        hasChildren: true,
        level: 1,

        props: [
          { propType: 1, parent: 'DIMA', inherited: false, title: 'کشور سازنده', value: 'ایران' },
          { propType: 1, parent: 'DIMA', inherited: false, title: 'شرکت', value: 'دیما دیزل' },
          { propType: 1, parent: 'DIMA', inherited: false, title: 'بنر', value: 'banner-dima.webp' },
        ],

        images: [],
        children: [
          // -------- DIMA X500 --------
          {
            hierarchyId: 'DIMA-X500',
            code: 'X500',
            title: 'کامیون دیما X500',
            iconId: 'icon-x500',
            hasChildren: false,
            level: 2,

            props: [
              { propType: 1, parent: 'DIMA-X500', inherited: false, title: 'بنر', value: 'banner-x500.webp' },
              {
                propType: 1,
                parent: 'DIMA-X500',
                inherited: false,
                title: 'توضیحات',
                value: '<p>دیما X500 کامیونی قدرتمند برای مسیرهای طولانی و بارهای سنگین.</p>',
              },

              { propType: 2, parent: 'DIMA-X500', inherited: false, title: 'قدرت موتور', value: '500 اسب بخار' },
              { propType: 2, parent: 'DIMA-X500', inherited: false, title: 'نوع موتور', value: 'دیزلی توربو' },
              { propType: 2, parent: 'DIMA-X500', inherited: false, title: 'گیربکس', value: 'اتوماتیک 12 سرعته ZF' },
              { propType: 2, parent: 'DIMA-X500', inherited: false, title: 'استاندارد آلایندگی', value: 'Euro 5' },

              { propType: 3, parent: 'DIMA-X500', inherited: false, title: 'بروشور', value: '/files/x500-brochure.pdf' },
              { propType: 4, parent: 'DIMA-X500', inherited: false, title: 'دفترچه راهنما', value: '/files/x500-manual.pdf' },
              { propType: 5, parent: 'DIMA-X500', inherited: false, title: 'دفترچه گارانتی', value: '/files/x500-warranty.pdf' },
              { propType: 7, parent: 'DIMA-X500', inherited: false, title: 'کاتالوگ', value: '/files/x500-catalog.pdf' },
            ],

            images: [
              {
                title: 'نمای جلو X500',
                fileId: 'x500-front.webp',
                commodityId: 'X500',
                id: 'img-x500-1',
                creationDateTime: '2025-12-22T08:10:00Z',
                creationDatePersian: '۱۴۰۴/۱۰/۰۱',
                creationTimePersian: '۱۱:۴۰',
              },
            ],

            children: [],
            id: 'X500',
            creationDateTime: '2025-12-22T08:05:00Z',
            creationDatePersian: '۱۴۰۴/۱۰/۰۱',
            creationTimePersian: '۱۱:۳۵',
          },

          // -------- DIMA D380 --------
          {
            hierarchyId: 'DIMA-D380',
            code: 'D380',
            title: 'کامیون دیما D380',
            iconId: 'icon-d380',
            hasChildren: false,
            level: 2,

            props: [
              { propType: 1, parent: 'DIMA-D380', inherited: false, title: 'بنر', value: 'banner-d380.webp' },
              {
                propType: 1,
                parent: 'DIMA-D380',
                inherited: false,
                title: 'توضیحات',
                value: '<p>دیما D380 اقتصادی و مناسب حمل‌ونقل شهری و بین‌شهری.</p>',
              },

              { propType: 2, parent: 'DIMA-D380', inherited: false, title: 'قدرت موتور', value: '380 اسب بخار' },
              { propType: 2, parent: 'DIMA-D380', inherited: false, title: 'مصرف سوخت', value: 'کم‌مصرف' },

              { propType: 3, parent: 'DIMA-D380', inherited: false, title: 'بروشور', value: '/files/d380-brochure.pdf' },
            ],

            images: [],
            children: [],
            id: 'D380',
            creationDateTime: '2025-12-22T08:20:00Z',
            creationDatePersian: '۱۴۰۴/۱۰/۰۱',
            creationTimePersian: '۱۱:۵۰',
          },
        ],

        id: 'DIMA',
        creationDateTime: '2025-12-22T08:00:00Z',
        creationDatePersian: '۱۴۰۴/۱۰/۰۱',
        creationTimePersian: '۱۱:۳۰',
      },

      // ===================== BRAND: FUSO =====================
      {
        hierarchyId: 'FUSO',
        code: 'FUSO',
        title: 'خودروهای فوسو',
        iconId: 'icon-fuso',
        hasChildren: true,
        level: 1,

        props: [
          { propType: 1, parent: 'FUSO', inherited: false, title: 'کشور سازنده', value: 'ژاپن' },
          { propType: 1, parent: 'FUSO', inherited: false, title: 'شرکت', value: 'Mitsubishi Fuso' },
          { propType: 1, parent: 'FUSO', inherited: false, title: 'بنر', value: 'banner-fuso.webp' },
        ],

        images: [],
        children: [
          // -------- FUSO CANTER --------
          {
            hierarchyId: 'FUSO-CANTER',
            code: 'CANTER',
            title: 'فوسو کانتر',
            iconId: 'icon-canter',
            hasChildren: false,
            level: 2,

            props: [
              { propType: 1, parent: 'FUSO-CANTER', inherited: false, title: 'بنر', value: 'banner-canter.webp' },
              {
                propType: 1,
                parent: 'FUSO-CANTER',
                inherited: false,
                title: 'توضیحات',
                value: '<p>فوسو کانتر، کامیونی سبک و مناسب توزیع شهری.</p>',
              },

              { propType: 2, parent: 'FUSO-CANTER', inherited: false, title: 'قدرت موتور', value: '175 اسب بخار' },
              { propType: 2, parent: 'FUSO-CANTER', inherited: false, title: 'گیربکس', value: 'دستی 6 سرعته' },

              { propType: 3, parent: 'FUSO-CANTER', inherited: false, title: 'بروشور', value: '/files/canter-brochure.pdf' },
            ],

            images: [],
            children: [],
            id: 'CANTER',
            creationDateTime: '2025-12-22T08:25:00Z',
            creationDatePersian: '۱۴۰۴/۱۰/۰۱',
            creationTimePersian: '۱۱:۵۵',
          },

          // -------- FUSO SUPER GREAT --------
          {
            hierarchyId: 'FUSO-SUPER-GREAT',
            code: 'SUPER-GREAT',
            title: 'فوسو سوپر گریٹ',
            iconId: 'icon-super-great',
            hasChildren: false,
            level: 2,

            props: [
              { propType: 1, parent: 'FUSO-SUPER-GREAT', inherited: false, title: 'بنر', value: 'banner-super-great.webp' },
              {
                propType: 1,
                parent: 'FUSO-SUPER-GREAT',
                inherited: false,
                title: 'توضیحات',
                value: '<p>فوسو سوپر گریٹ، کامیونی سنگین برای حمل‌ونقل بین‌المللی.</p>',
              },

              { propType: 2, parent: 'FUSO-SUPER-GREAT', inherited: false, title: 'قدرت موتور', value: '460 اسب بخار' },
              { propType: 2, parent: 'FUSO-SUPER-GREAT', inherited: false, title: 'استاندارد آلایندگی', value: 'Euro 6' },

              { propType: 7, parent: 'FUSO-SUPER-GREAT', inherited: false, title: 'کاتالوگ', value: '/files/super-great-catalog.pdf' },
            ],

            images: [],
            children: [],
            id: 'SUPER-GREAT',
            creationDateTime: '2025-12-22T08:30:00Z',
            creationDatePersian: '۱۴۰۴/۱۰/۰۱',
            creationTimePersian: '۱۲:۰۰',
          },
        ],

        id: 'FUSO',
        creationDateTime: '2025-12-22T08:10:00Z',
        creationDatePersian: '۱۴۰۴/۱۰/۰۱',
        creationTimePersian: '۱۱:۴۰',
      },
    ],

    id: 'VEHICLES',
    creationDateTime: '2025-12-22T07:50:00Z',
    creationDatePersian: '۱۴۰۴/۱۰/۰۱',
    creationTimePersian: '۱۱:۲۰',
  },
];



function findByCode(items: any[], code: string): any | null {
  for (const item of items) {
    if (item.code === code) return item;

    if (item.children?.length) {
      const found = findByCode(item.children, code);
      if (found) return found;
    }
  }
  return null;
}

export async function GET(
  _: Request,
  { params }: { params: { code: string } }
) {
  const commodity = findByCode(commodities, params.code);

  if (!commodity) {
    return NextResponse.json(
      { message: 'Commodity not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(commodity);
}
