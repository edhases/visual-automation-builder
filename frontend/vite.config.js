import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.js",
      formats: ["es"],
      fileName: () => "automation-builder.js",
    },
    outDir: "../custom_components/visual_automation_builder/frontend",
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
});
