import { svelte } from "@sveltejs/vite-plugin-svelte";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preprocess from "svelte-preprocess";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineConfig({
	plugins: [
		wasm(),
		topLevelAwait(),
		react(),
		svelte({
			preprocess: [preprocess()],
		}),
		peerDepsExternal(),
	],
	build: {
		minify: "terser",
		terserOptions: {
			mangle: {
				toplevel: true,
				module: true,
				properties: {
					regex: /^_/,
				},
			},
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		target: "ES2020",
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "sdk",
			formats: ["es"],
			fileName: (format) => `sdk-react.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "jsxRuntime",
				},
			},
			plugins: [],
		},
	},
});
