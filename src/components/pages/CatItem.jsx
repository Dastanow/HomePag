import React from 'react'
import './cartItem.scss'

const CatItem = ({ id, title, price, images }) => {
  return (
    <div className='Cart'>
          <div className='cartitem'>
      <div className='cartItem_'>
             
        <div className='img__'>   
               <img src={images} alt="" />
        </div>
    
      </div>
      </div>
      
               <h3>{title}</h3>
        <h4>{price}$</h4>
        
    </div>

       
       
  )
}

export default CatItem