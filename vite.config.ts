import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ตั้ง base ให้เป็นชื่อ repository ของคุณ
  base: '/My-girlfriend-bd/', // แทนที่ "My-girlfriend-bd" ด้วยชื่อ repository ของคุณ
});
