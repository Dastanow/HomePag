import React from 'react'
import '../styls/header.scss'
import {  AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'

const Heder = () => {
  return (
    <div>
        <div className='container'>
            <div className='imag'>
                <img src="https://ik.imagekit.io/tvlk/blog/2020/01/Traveloka_Primary_Logo.png?tr=dpr-2,w-675" alt="" />
            </div>
            
            <div className='icon'>
                <AiOutlineHome/>
<AiOutlineHeart/>
<BsCart2/>
            </div>

        </div>
        <div className='header__top'>
            <ul className='list-non'>
                <li>О компании</li>
                <li>Акции</li>
                <li>Хиты сезона</li>
                <li>Новинки</li>
         
            </ul>
        </div>

    </div>
  )
}

export default Heder