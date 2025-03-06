import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    return {
        resolve: {
            extensions: ['.js', '.json', '.ts'],
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, 'src'),
                },
            ],
        },
        build: {
            sourcemap: false,
            emptyOutDir: true,
            minify: 'esbuild',
            cssCodeSplit: false,
            reportCompressedSize: false,
            chunkSizeWarningLimit: 10240,
            rollupOptions: {
                treeshake: true,
                cache: true,
            },
        },
        optimizeDeps: { include: [] },
    };
});
