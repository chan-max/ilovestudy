/*
 * @Author: chan-max 2651308363@qq.com
 * @Date: 2023-11-28 01:16:00
 * @LastEditors: chan-max 2651308363@qq.com
 * @LastEditTime: 2024-02-24 22:57:10
 * @FilePath: /ilovestudy/src/router/index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 1s, All Rights Reserved. 
 */


import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/home/index'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home.vue'),
        children: [
          {
            name: 'HomeIndex',
            path: 'index',
            component: () => import('../views/index/index.vue')
          }
        ]
      },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
