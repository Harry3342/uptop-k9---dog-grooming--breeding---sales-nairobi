import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'uptopk9';
  const pagesBase = `/${repositoryName}/`;

  return {
    base: isGitHubPagesBuild ? pagesBase : '/',
    plugins: [
      {
        name: 'github-pages-public-assets',
        transformIndexHtml(html) {
          if (!isGitHubPagesBuild) {
            return html;
          }

          return html.replaceAll('="/assets/', `="${pagesBase}assets/`);
        },
        transform(code, id) {
          if (!isGitHubPagesBuild || !/[\\/]src[\\/]/.test(id)) {
            return null;
          }

          return {
            code: code
              .replaceAll("'/assets/", `'${pagesBase}assets/`)
              .replaceAll('"/assets/', `"${pagesBase}assets/`),
            map: null,
          };
        },
      },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/api': 'http://localhost:8787',
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
