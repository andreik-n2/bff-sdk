import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	optimizeDeps: {
		include: ['@virgograph/svelte-query', '@virgograph/sdk/client'],
		esbuildOptions: {
			target: 'es2020',
		},
	},
});
