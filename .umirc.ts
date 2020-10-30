/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-29 10:19:15
 * @LastEditTime: 2020-10-30 16:38:48
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  // title: 'hi',
  hash: true,
  // history: {
  //   type: 'browser'
  // },
  // mock: false, // 默认开启的   MOCK=none umi dev // 也可以通过环境变量临时关闭
  // 通常base和publicPath保持一致
  base: '/abc/',
  publicPath: '/abc/',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/dva', component: '@/pages/dva' },
    {
      path: '/user',
      component: '@/pages/user',
      title: '用户中心',
      routes: [
        {
          path: '/user/center',
          component: '@/pages/user/center',
          title: '体验中心',
        }
      ]
    },
  ],
});
