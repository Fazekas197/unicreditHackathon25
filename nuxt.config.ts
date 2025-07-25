// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	modules: ["@nuxt/ui"],
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},
});
