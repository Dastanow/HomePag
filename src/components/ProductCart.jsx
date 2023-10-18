import React from 'react'
import "../styls/ProductCart.scss"
import { BsCart2 } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"


const ProductCart = ({title, price, description, image}) => {
  return (
    <div className='cart'>
        <div className='cart__top'>
            <h1 className='new__text'>New</h1>
            <div className='heart-_-icon'>
                <AiOutlineHeart/>
            </div>
        </div>
        <div className='image'>
        <img src={image} alt="" />
        </div>
        <div className='cart__button'>
            <h3>{title}</h3>
            <div className='prais__cart'>
        <span>{price}$</span>
        <span className='card'><BsCart2/></span>
        </div>
        </div>
    </div>
  )
}

export default ProductCart