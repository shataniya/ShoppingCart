// 存放触发数据更新的方法
// 购物车添加商品
function AddProduct(data){
    return (dispatch, getState) => {
        dispatch({ type: "ADD_PRODUCT", data })
    }
}

// 购物车移除商品
function RemoveProduct(data){
    return (dispatch, getState) => {
        dispatch({ type: "REMOVE_PRODUCT", data })
    }
}

// 清空购物车
function ClearProduct(data){
    return (dispatch, getState) => {
        dispatch({ type: "CLEAR_PRODUCT", data })
    }
}

module.exports = {
    AddProduct,
    RemoveProduct,
    ClearProduct
}