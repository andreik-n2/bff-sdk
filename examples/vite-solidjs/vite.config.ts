import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	optimizeDeps: {
		include: ['@virgograph/solid-query', '@virgograph/sdk/client'],
		esbuildOptions: {
			target: 'es2020',
		},
	},
});
