const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      faviconSVG: "@/src/assets/favicon.ico",
      favicon32: "@/src/assets/favicon-32x32.png",
      favicon16: "@/src/assets/favicon-16x26.png",
      appleTouchIcon: "@/src/assets/apple-touch-icon-152x152.png",
      maskIcon: "@/src/assets/android-chrome-192x192.png",
      msTileImage: "@/src/assets/android-chrome-512x512.png",
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
