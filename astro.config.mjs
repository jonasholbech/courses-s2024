import dotenv from "dotenv";
dotenv.config();
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  integrations: [svelte()],
});
