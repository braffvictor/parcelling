import "vuetify/styles";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//this is for font awesome icons
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, fa } from "vuetify/iconsets/fa4";

const light = {
  dark: false,
  colors: {
    accent: "#001b3a",
    primary: "#ea580c",
    secondary: "#000000",
  },
};

const dark = {
  dark: true,
  colors: {
    primary: "#ea580c",
    secondary: "#ffffff",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      class: "text-capitalize",
    },
  },

  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: "light",
    variations: {
      colors: ["primary", "secondary", "accent"],
      lighten: 4,
      darken: 4,
    },
    themes: {
      dark,
      light,
    },
  },
  // customVariables: ["~/assets/variables.css"],
});

export default vuetify;
