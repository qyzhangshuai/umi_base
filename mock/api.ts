/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-30 10:52:44
 * @LastEditTime: 2020-10-30 15:21:14
 * @LastEditors: zs
 */
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  '/api/users/1': { id: 1 },
  '/api/auth': { isLogin: true },
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}