const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      faviconSVG: "/favicon.ico",
      favicon32: "/favicon-32x32",
      favicon16: "/favicon-16x26.png",
      appleTouchIcon: "/apple-touch-icon-152x152.png",
      maskIcon: "/android-chrome-192x192.png",
      msTileImage: "/android-chrome-512x512.png",
    },
    themeColor: "#001b3a",
    msTileColor: "#001b3a",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#001b3a",
      name: "Parcelling",
      short_name: "Parcling",
      theme_color: "#001b3a",
    },
  },
});
