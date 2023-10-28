import React from 'react'
import "../styls/ProductCart.scss"
import { BsCart2 } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slice/cartSlice';


const ProductCart = ({ id, title, price, description, image}) => {
  const dispatch = useDispatch();
  const [ activType, setActivType ] = React.useState(0);
  const [ activSize, setActivSize ] = React.useState(0);
  
  const onClickAdd = () => {
    const item = {
id,
title,
price,
image,
type: activType,
size: activSize
    };
    dispatch(addItem(item));
  }
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
        <span onClick={onClickAdd} className='card'><BsCart2/></span>
        </div>
        </div>
    </div>
  )
}

export default ProductCart