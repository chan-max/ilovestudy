
/*
 * @Author: chan-max jackieontheway666@gmail.com
 * @Date: 2024-01-02 19:17:55
 * @LastEditors: chan-max 2651308363@qq.com
 * @LastEditTime: 2024-02-24 22:55:05
 * @FilePath: /ilovestudy/src/main.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by 1s, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import {IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import 'animate.css';

import VConsole from 'vconsole';

/* Theme variables */
import './theme/variables.less';


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/dark/css-vars.css'


import { createPinia } from 'pinia'

if (true || import.meta.env.DEV) {
    const vConsole = new VConsole({ theme: 'dark' });
}

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

app.use(router);

app.use(ElementPlus);

app.use(IonicVue, {
    mode: "ios",
    swipeGesture: false,
    swipeBackEnabled: false,
    backButtonText: '',
});

import { initIonicComponents } from './helper/ionic'

initIonicComponents(app)

import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);

router.isReady().then(async () => {
    // 将登录信息同步到本地
    app.mount('#app');
});

