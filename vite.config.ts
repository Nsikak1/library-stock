import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'fs';

export default defineConfig({
	assetsInclude: ['**/*.numbers', '**/*.xls', '**/*.xlsx'],
	plugins: [sveltekit(),

	 {
    name: "sheet-base64",
    transform(code, id) {
      if(!id.match(/\.(numbers|xlsx)$/)) return;
      var data = readFileSync(id, "base64");
      return `export default '${data}'`;
    }
  },],

  server: {
	 host: true,  // or host: true
    port: 5173,
	fs: {
	  allow: [".."],
	},
  },

	test: {
		expect: { requireAssertions: true },

		projects: [
			{
				extends: './vite.config.ts',

				test: {
					name: 'client',

					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},

					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
