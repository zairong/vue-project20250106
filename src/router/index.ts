import { createRouter, createWebHashHistory } from 'vue-router'

import Vue2 from '@/pages/Vue2.vue'
import Vue3 from '@/pages/Vue3.vue'
import TsDemo from '@/pages/TsDemo.vue'
import PropsDemo from '@/pages/PropsDemo.vue'

export const router = createRouter({
  // GitHub Pages 是純靜態站，history 模式在重新整理 / 直接輸入子路由時會 404
  // 改用 hash 模式（URL 會長得像 /#/vue3）即可在 Pages 正常運作
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home', path: '/', redirect: '/vue3' },
    {
      name: 'vue2',path: '/vue2', component: Vue2 },
    {
      name: 'vue3',path: '/vue3', component: Vue3 },
    {
      name: 'tsdemo',path: '/tsdemo', component: TsDemo },
    {
      name: 'propsdemo',
      // 若要使用 route params（例如 route.params.b），path 必須宣告動態段（:b）
      // 設成可選 :b?，可避免手動輸入 /propsdemo 時因缺少 b 而無法匹配
      path: '/propsdemo/:b?',
      component: PropsDemo,
      // props: {
      //   a: '從路由帶入的 a',
      // },
      // 若要自動把 route.params / route.query 當 props 傳入，可改用 `props: true`
      props: (route) => ({
        a: '從路由帶入的 a',
        b: route.params,
        c: route.query,
      }),
    },
  ],
})


