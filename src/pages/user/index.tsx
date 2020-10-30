/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-29 10:19:15
 * @LastEditTime: 2020-10-30 11:08:58
 * @LastEditors: zs
 */
import React from 'react';
import { Button } from 'antd'
import { Link, NavLink } from 'umi'
import axios from 'axios'
import styles from './index.less';
import './index.less'

export default (props: any) => {
    const handleQuery = async () => {
        const result = await axios.get('/api/users')
        console.log('result', result)
    }
    return (
        <div>
            <h1 className={styles.title}>Page user</h1>
            <Button size='large' type='primary' onClick={handleQuery} >请求按钮</Button>
            <hr />
            <Link to='/user/center'>用户中心1</Link>
            <hr />
            <NavLink to='/user/center'>用户中心1</NavLink>
            <hr />
            {props.children}
        </div>
    );
}
