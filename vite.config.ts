import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const MODE = process.env.NODE_ENV

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    target: 'es2022',
		cssMinify: MODE === 'production',
    rollupOptions: isSsrBuild
      ? {
          input: "./server/app.ts",
        }
      : undefined,
      sourcemap: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '+types': '/.react-router/types/app/routes/+types',
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));
