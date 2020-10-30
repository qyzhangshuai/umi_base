/**
 * @description: 
 * @author: zs
 * @Date: 2020-10-30 13:45:44
 * @LastEditTime: 2020-10-30 15:01:58
 * @LastEditors: zs
 */
import { list } from '@/services/dev'
import { Effect, Reducer, Subscription } from 'umi'

export interface StateType {
    list: any[]
}

export interface DevModelType {
    namespace: string;
    state: StateType;
    subscriptions: { setupHistory: Subscription }
    effects: {
        list: Effect;
    };
    reducers: {
        listInfo: Reducer<StateType>;
    };
}

const Modal: DevModelType = {
    namespace: 'demoDva',
    state: {
        list: []
    },
    subscriptions: {
        setupHistory({ history, dispatch }) {
            history.listen(({ pathname }) => {
                if (pathname === '/dva') {
                    console.log('path1', pathname)
                }
            })
        },
    },
    effects: {
        *list({ payload, callback }, { put, call }) {
            // console.log(payload, callback, put, call)
            const result = yield call(list, payload)
            console.log('result', result)
            yield put({ type: 'listInfo', payload: result.data })
        },
    },
    reducers: {
        listInfo(state: any, action: any) {
            return {
                ...state,
                ...action.payload,
            }
        },
    },
}

export default Modal