// 引入初始数据
import initState from './state'

import { combineReducers } from 'redux'

// reducer实际上就是可变动的数据
// 定义想购物车添加商品的reducer
function shoplist(state=initState.shoplist, action){
    // 根据action的type属性来执行相应的操作
    switch(action.type){
        // 购物车添加商品
        case "ADD_PRODUCT":
            state.push(action.data)
            return state
        // 购物车移除商品
        case "REMOVE_PRODUCT":
            state = state.filter(el=>el.name !== action.data.name)
            return state
        // 清空购物车
        case "CLEAR_PRODUCT":
            state = []
            return state
        default:
            return state
    }
}

// 导出reducers
export default combineReducers({
    shoplist
})