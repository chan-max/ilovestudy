/*
 * @Author: chan-max 2651308363@qq.com
 * @Date: 2024-02-24 21:38:01
 * @LastEditors: chan-max 2651308363@qq.com
 * @LastEditTime: 2024-02-24 23:00:42
 * @FilePath: /ilovestudy/vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by 1s, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      /*  @/ 代表src 路径下 ， @ 代表全局路径下 */
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
