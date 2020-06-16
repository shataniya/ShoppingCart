import React from 'react'
import style from './Product.css'
// components
import ProductCard from '../component/ProductCard'
import { Input, Pagination } from 'antd'
import { AliwangwangFilled, ShoppingCartOutlined, ConsoleSqlOutlined } from '@ant-design/icons'
// <AliwangwangFilled /> <ShoppingCartOutlined />
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// 获取数据
import initState from '../store/state'

class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
            page: 1
        }
        this.onProductCardClick = this.onProductCardClick.bind(this)
        this.onPageChange = this.onPageChange.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }
    onProductCardClick(el){
        this.props.history.push({ pathname: "/info", state: el })
    }
    onPageChange(page){
        this.setState({ page })
    }
    // 点击搜索按钮是会进行数据的筛选
    onSearch(val){
        let vals = val.trim().split(/\s+/g)
        let list = this.state.list
        if(vals.length === 1 && vals[0] === ""){
            // 说明是空格或者空字符串
            list = initState.list
        }
        vals.forEach(el => {
            if(Number.isNaN(+el)){
                // 说明是字符串
                let reg = new RegExp(el, "g")
                // console.log(reg)
                // 一旦是字符串就根据商品的名称筛选
                list = list.filter(element => reg.test(element.name))
            }else{
                // 说明是数字
                // 一旦是数字就根据商品的价格筛选
                let p = +el
                list = list.filter(element => element.price >= p)
            }
        })
        this.setState({ list })
    }
    componentDidMount(){
        // 获取数据
        this.setState({ list: initState.list })
    }
    render(){
        let shoplist = this.props.shoplist
        let { list, page } = this.state
        let startidx = (page-1)*10, endidx = page*10
        return (
            <div className={style.root}>
                <header className={style.header}>
                    <p className={style.header_icon}><AliwangwangFilled /></p>
                    <p className={style.header_link}>欢迎来到购物中心</p>
                    <Link 
                    to="/shopcar" 
                    className={style.header_shopcar}>
                        <ShoppingCartOutlined className={style.icon} />购物车{shoplist.length ? "("+shoplist.length+")" : null}
                    </Link>
                </header>
                <Input.Search 
                placeholder="input search text" 
                enterButton="Search" 
                size="large" 
                className={style.search}
                onSearch={this.onSearch}
                ></Input.Search>
                <div className={style.container}>
                    {list.slice(startidx, endidx).map((el, idx) => (
                        <ProductCard 
                        image={el.image} 
                        name={el.name} 
                        desc={el.desc} 
                        price={el.price}
                        onClick={()=>{this.onProductCardClick(el)}}
                        key={"card_"+idx}
                        ></ProductCard>
                    ))}
                </div>
                <footer className={style.footer}>
                    <Pagination 
                    defaultCurrent={1} 
                    current={page}
                    total={list.length}
                    onChange={this.onPageChange}
                    ></Pagination>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        shoplist: state.shoplist
    }
}

export default connect(mapStateToProps)(Product)