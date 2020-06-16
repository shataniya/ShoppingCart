import React from 'react'
import { Row, Col, Radio, Button, message } from 'antd'
// #6caef9 #3b93f7
import style from './Information.css'
// actions
import { AddProduct } from '../store/actions'
// connent
import { connect } from 'react-redux'

class Information extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            size: "",
            color: ""
        }
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.goBack = this.goBack.bind(this)
    }
    handleSizeChange(e){
        this.setState({ size: e.target.value })
    }
    handleColorChange(e){
        this.setState({ color: e.target.value })
    }
    // 点击加入购物车按钮之后触发的点击事件
    handleButtonClick(){
        let { size, color } = this.state
        let el = this.props.location.state
        let state = {
            ...el,
            size,
            color,
            longdesc: el.name+" "+size+" "+color
        }
        // 将物品添加进购物车
        this.props.AddProduct(state)
        // 提示购物车添加成功
        message.success("商品成功添加进购物车")
        // 跳转到商品展览页面
        this.props.history.push({ pathname: "/", state })
    }
    // 返回商品展览页面
    goBack(){
        this.props.history.push({ pathname: "/" })
    }
    render(){
        const { name, image, desc, price } = this.props.location.state
        return (
            <div className={style.root}>
                <Row>
                    <Col span={12} className={[style.all_height, style.left_page]}>
                        <img src={image} className={style.info_image}></img>
                    </Col>
                    <Col span={12} className={style.all_height}>
                        <h3 className={style.title}>{name}</h3>
                        <p className={style.desc}>{desc}</p>
                        <p className={style.price}>{price}元</p>
                        <h1 className={style.banben_title}>选择版本</h1>
                        <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                            <Radio.Button value="6GB+64GB">6GB+64GB</Radio.Button>
                            <Radio.Button value="6GB+128GB">6GB+128GB</Radio.Button>
                            <Radio.Button value="8GB+128GB">8GB+128GB</Radio.Button>
                            <Radio.Button value="8GB+256GB">8GB+256GB</Radio.Button>
                        </Radio.Group>
                        <h1 className={style.color_title}>选择颜色</h1>
                        <Radio.Group value={this.state.color} onChange={this.handleColorChange}>
                            <Radio.Button value="深海微光">深海微光</Radio.Button>
                            <Radio.Button value="时光独白">时光独白</Radio.Button>
                        </Radio.Group>
                        <div className={style.total}>
                            <p className={style.total_desc}>{name+" "+this.state.size+" "+this.state.color}</p>
                            <h3 className={style.total_money}>{price}元</h3>
                        </div>
                        <div className={style.buttonGrop}>
                            <Button type="primary" size="large" className={style.button} onClick={this.handleButtonClick}>加入购物车</Button>
                            <Button type="link" onClick={this.goBack}>返回首页</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

// 将shoplist绑定到props里边
function mapStateToProps(state){
    return {
        shoplist: state.shoplist
    }
}

// 将AddProduct绑定到props里边
function mapDispatchToProps(dispatch){
    return {
        AddProduct: (data) => dispatch(AddProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information)