import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#E1BEE7",
            secondary: "#6200EA",
          },
        },
      },
    },
  });

  nuxtApp.vuetify = vuetify;
  nuxtApp.vueApp.use(vuetify);
});
