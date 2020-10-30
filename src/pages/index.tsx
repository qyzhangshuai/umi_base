/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-29 10:19:15
 * @LastEditTime: 2020-10-29 10:31:36
 * @LastEditors: zs
 */
import React from 'react';
import {Button} from 'antd'
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button size='large' type='primary' >按钮</Button>
    </div>
  );
}
