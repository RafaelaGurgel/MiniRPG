import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  // CONFIGURAÇÕES IMPORTANTES PARA O VERCEL
  base: '/', // Isso resolve problemas de caminhos no Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Pasta onde as imagens serão colocadas
    assetsInlineLimit: 4096, // Imagens menores que 4kb serão inline
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      }
    }
  },
  
  // Configuração do servidor de desenvolvimento
  server: {
    port: 3000,
    open: true
  },
  
  // Otimizações para imagens
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
