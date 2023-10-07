// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
    },
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/", // /confirm
      exclude: [],
    },
  },
  formkit: {
    configFile: "formkit.config.ts",
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
