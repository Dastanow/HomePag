import React from 'react'
import { BsCart2 } from 'react-icons/bs'
// import { useDispatch, useSelector, } from 'react-redux';
import { Link } from 'react-router-dom'
import CatItem from './pages/CatItem'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineHome } from 'react-icons/ai'
import '../styls/carthin.scss'
import CartHeder from './CartHeder'

const Corthina = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.items)

  return (
    <div>
      <Link to={'/'}>
      <AiOutlineHome/>
      </Link>
      <div className='heder_t'>      <CartHeder/>
</div>
      <div className='carthin'>  {
        items.map((item) => (
        <CatItem key={item.id} {...item}/>))
      }</div>
    
    </div>
  )
}

export default Corthina