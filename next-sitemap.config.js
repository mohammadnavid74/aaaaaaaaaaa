/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mayan-group.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/survay"], // اگه صفحه خصوصی دارید مثل /dashboard یا /login اینجا بزارید

  changefreq: "weekly",
  priority: 0.7,

  transform: async (config, path) => {
    // تنظیمات اختصاصی بر اساس مسیر
    const customSettings = {
      "/": { changefreq: "daily", priority: 1.0 },
      "/agents": { changefreq: "weekly", priority: 0.8 },
      "/news": { changefreq: "hourly", priority: 0.9 },
      "/commodity": { changefreq: "weekly", priority: 0.8 },
      "/commodityDetail": { changefreq: "weekly", priority: 0.6 },
      "/news": { changefreq: "daily", priority: 0.5 },
      "/news2": { changefreq: "daily", priority: 0.5 },
    };

    const setting = customSettings[path] || {
      changefreq: config.changefreq,
      priority: config.priority,
    };

    return {
      loc: path,
      changefreq: setting.changefreq,
      priority: setting.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
