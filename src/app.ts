/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-30 14:56:35
 * @LastEditTime: 2020-10-30 16:28:26
 * @LastEditors: zs
 */
import { history } from 'umi';

// 修改路由
export function patchRoutes({ routes }) {
    routes.unshift({
        path: '/foo',
        exact: true,
        component: require('@/pages/user').default,
    });
}

// 覆写 render。
// 比如用于渲染之前做权限校验
// 一般在该方法里面做如下操作
// 1、加载项目需要的初始运行参数（通过接口加载）
// 2、判断当前是否处于登陆状态
export function render(oldRender) {
    fetch('/api/auth').then(response => response.json()).then(auth => {
        console.log('auth', auth)
        if (auth.isLogin) { oldRender() }
        else {
            history.push('/login');
            oldRender()
        }
    });
}

// // 在初始加载和路由切换时做一些事情。
export function onRouteChange({ matchedRoutes, location, routes, action }) {
    // bacon(location.pathname);
    console.log(matchedRoutes, location, routes, action)
}
// // 比如用于做埋点统计，
// export function onRouteChange({ matchedRoutes }) {
//     if (matchedRoutes.length) {
//         document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
//     }
// }