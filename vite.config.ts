import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@services': path.resolve(__dirname, './src/services'),
        '@types': path.resolve(__dirname, './src/types'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@context': path.resolve(__dirname, './src/context'),
      },
    },

    server: {
      port: 5173,
      strictPort: false,
      open: true,
      cors: {
        origin: '*',
        credentials: true,
      },
      proxy: {
        '/api': {
          target: env.VITE_GAS_API_ENDPOINT || 'https://script.google.com/macros/d/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-utils': ['date-fns', 'crypto-js', 'clsx', 'axios'],
          },
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name].[hash][extname]'
            } else if (/\.css$/.test(name ?? '')) {
              return 'assets/styles/[name].[hash][extname]'
            }
            return 'assets/[name].[hash][extname]'
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      commonjsOptions: {
        include: [/node_modules/],
        sourceMap: false,
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'qrcode.react'],
    },

    esbuild: {
      loader: 'tsx',
      include: /src\/.*\.tsx?$/,
      exclude: [],
    },

    css: {
      modules: {
        localsConvention: 'camelCase',
        hashPrefix: 'url-',
      },
      postcss: './postcss.config.js',
    },
  }
})
