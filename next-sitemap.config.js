module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    const result = [];

    result.push({ loc: "/" });
    result.push({ loc: "/sign-in" });
    result.push({ loc: "/sign-up" });
    result.push({ loc: "/workspaces" });

    return result;
  },
};
