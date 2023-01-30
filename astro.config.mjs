import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import storyblok from "@storyblok/astro";
dotenv.config({
  path: ".env"
});

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), storyblok({
    accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
    components: {
      page: "storyblok/Page",
      article: "storyblok/Article",
      assets: "storyblok/Assets"
    }
  }), image()]
});