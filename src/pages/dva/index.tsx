/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-30 13:37:43
 * @LastEditTime: 2020-10-30 14:42:59
 * @LastEditors: zs
 */
import React from "react"
import { connect } from "dva"
import { Button } from 'antd'

type DvaProps = any

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Dva: React.FC<DvaProps> = (props) => {
    console.log('props', props)
    const callback1 = () => {
        console.log('callback')
    }
    const fetch = () => {
        props.dispatch({
            type: 'demoDva/list',
            payload: { list: [{ id: 2 }] },
            callback: callback1,
        })
    }
    return (
        <>
            <Button onClick={fetch}>请求按钮</Button>
            <div>{`${props.demoDva.users}`}</div>
        </>
    )
}

const mapStateToProps = (props: any) => props;

export default connect(mapStateToProps)(Dva)
