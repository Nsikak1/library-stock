import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import { sveltekit } from "@sveltejs/kit/vite";
import { readFileSync } from "fs";
import BasicSSl from "@vitejs/plugin-basic-ssl";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import fs from "fs";

export default defineConfig({
  assetsInclude: ["**/*.numbers", "**/*.xls", "**/*.xlsx"],
  plugins: [
    wasm(),
    topLevelAwait(), // Required for compatibility with older browsers

    sveltekit(),

    {
      name: "sheet-base64",
      transform(code, id) {
        if (!id.match(/\.(numbers|xlsx)$/)) return;
        var data = readFileSync(id, "base64");
        return `export default '${data}'`;
      },
    },
  ],

  server: {
    https: {
      key: fs.readFileSync("./localhost+1-key.pem"),
      cert: fs.readFileSync("./localhost+1.pem"),
    },
    host: true,
    port: 5173,
    headers: {
      // These headers are mandatory for Wasm Threads/SharedArrayBuffer
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    fs: {
      allow: [".."],
    },
  },

  test: {
    expect: { requireAssertions: true },

    projects: [
      {
        extends: "./vite.config.ts",

        test: {
          name: "client",

          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium", headless: true }],
          },

          include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          exclude: ["src/lib/server/**"],
        },
      },

      {
        extends: "./vite.config.ts",

        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
        },
      },
    ],
  },
});
