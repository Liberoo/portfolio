import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from '@sanity/astro';
import { loadEnv } from "vite";
const {
    PUBLIC_SANITY_STUDIO_PROJECT_ID,
    PUBLIC_SANITY_STUDIO_DATASET,
    PUBLIC_SANITY_PROJECT_ID,
    PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;
// https://astro.build/config
export default defineConfig({
    output: "hybrid",

    integrations: [react(), tailwind({
        applyBaseStyles: false
    }), sanityIntegration({
        projectId: projectId,
        dataset: dataset,
        // Set useCdn to false if you're building statically.
        useCdn: false,
        studioBasePath: '/admin'
    })]
});