const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
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
