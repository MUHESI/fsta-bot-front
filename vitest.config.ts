import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';


export default defineConfig({
    plugins: [react()]
    ,
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [path.resolve(__dirname, 'test/setup.ts')],
        env: {
            IS_REACT_ACT_ENVIRONMENT: 'true',
        },
        include: ['__tests__/**/*.[jt]s?(x)']
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }

})
