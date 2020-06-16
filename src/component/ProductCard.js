import React from 'react'
import style from './ProductCard.css'

function ProductCard(props){
    return (
        <div className={style.card} onClick={props.onClick}>
            <img src={props.image} className={style.card_image}></img>
            <h3 className={style.card_name}>{props.name}</h3>
            <p className={style.card_desc}>{props.desc}</p>
            <p className={style.card_price}>{props.price}元</p>
        </div>
    )
}

export default ProductCard