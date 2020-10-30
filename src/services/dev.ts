/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-30 13:51:09
 * @LastEditTime: 2020-10-30 14:33:59
 * @LastEditors: zs
 */
import axios from 'axios'

export async function list(params: any) {
    return axios.get('/api/users')
}