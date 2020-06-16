import React from 'react'
import { connect } from 'react-redux'
// css
import style from './ShopCart.css'
import { Table, Button, message } from 'antd'
// <CloseCircleFilled />
import { CloseCircleFilled } from '@ant-design/icons'
import { RemoveProduct, ClearProduct } from '../store/actions'

class ShopCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // 设置表格
            columns: [
                {
                    title: "参考图",
                    dataIndex: "image",
                    key: "image",
                    render: image => (
                        <img src={image} className={style.image}></img>
                    )
                },
                {
                    title: "描述",
                    dataIndex: "longdesc",
                    key: "longdesc"
                },
                {
                    title: "数量",
                    dataIndex: "number",
                    key: "number"
                },
                {
                    title: "小计",
                    dataIndex: "total",
                    key: "total"
                },
                {
                    title: "操作",
                    dataIndex: "operation",
                    key: "operation",
                    render: (state) => (
                        <Button 
                        type="primary" 
                        onClick={() => this.onCloseClick(state)}
                        >
                            <CloseCircleFilled />删除
                        </Button>
                    )
                }
            ]
        }
        this.TotalMoney = this.TotalMoney.bind(this)
        this.buildTable = this.buildTable.bind(this)
        this.onCloseClick = this.onCloseClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onBack = this.onBack.bind(this)
    }
    // 计算所有商品的总额
    TotalMoney(){
        let shoplist = this.props.shoplist
        let sum = 0
        for(let i=0;i<shoplist.length;i++){
            sum += shoplist[i].price
        }
        return sum
    }
    // 点击删除按钮时提示删除商品成功
    onCloseClick(state){
        this.TotalMoney()
        // 点击删除按钮之后删除相应的东西
        this.props.RemoveProduct(state)
        // 提示显示删除成功
        message.success("商品删除成功")
    }
    // 创建表格
    buildTable(){
        let shoplist = this.props.shoplist
        // console.log(shoplist)
        if(shoplist.length){
            // 说明购物车里有东西
            const data = shoplist.map((el, idx) => ({
                key: idx,
                image: el.image,
                longdesc: el.longdesc,
                number: 1,
                total: el.price,
                operation: el
            }))
            return (
                <Table className={style.table} dataSource={data} columns={this.state.columns}></Table>
            )
        }else{
            // 说明购物车里没有东西
            return (
                <p className={style.info}>你的购物车里没有东西233</p>
            )
        }
    }
    // 点击结算之后进行结算提示
    onSubmit(){
        // 结算提示
        message.success("结算成功，花费了"+this.TotalMoney()+"元")
        // 清空购物车
        this.props.ClearProduct()
    }
    componentDidMount(){
        this.TotalMoney()
    }
    // 点击继续购物按钮，页面跳转到商品展览页面
    onBack(){
        // 页面跳转
        this.props.history.push({ pathname: "/" })
    }
    render(){
        // console.log(this.props.shoplist)
        return (
            <div className={style.root}>
                <header className={style.header}>
                    <h3 className={style.title}>我的购物车</h3>
                    <p className={style.subtitle}>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
                </header>
                <main className={style.container}>
                    {this.buildTable()}
                </main>
                <footer className={style.footer}>
                    <p className={style.goback} onClick={this.onBack}>继续购物</p>
                    <p className={style.descnum}>共<span className={style.totalnum}>{this.props.shoplist.length}</span>件商品</p>
                    <p className={style.totalmoney}>合计：<span className={style.totalnum}>{this.TotalMoney()}</span>元</p>
                    <p className={style.submit} onClick={this.onSubmit}>结算</p>
                </footer>
            </div>
        )
    }
}

// 将shoplist绑定到props
function mapStateToProps(state){
    return {
        shoplist: state.shoplist
    }
}
// 将方法绑定到props
function mapDispatchToProps(dispatch){
    return {
        RemoveProduct: (data) => dispatch(RemoveProduct(data)),
        ClearProduct: (data) => dispatch(ClearProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)