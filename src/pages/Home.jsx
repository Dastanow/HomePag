import React, { useEffect, useState } from 'react'
import ProductCart from '../components/ProductCart'
import Search from '../components/search'
import '../styls/home.scss'
import Prais from '../components/Prais'
import Heder from '../components/Heder'

const Home = ({ data, setfilterProduct, filteredProducts, priseSort, setPriseSort }) => {

  const priseData = (value) => {
    const filterPrise = data.filter((item) => 
    item.price >= value

    );
    setfilterProduct(filterPrise);
    setPriseSort(filterPrise)
  };

  
    const searchProduct = (value) => {
        const filteredData = data.filter((item) => 
        item.title.toLowerCase().includes(value.toLowerCase()),
        );
        setfilterProduct(filteredData)
    };
  return (
    <div>
      <Heder/>
      <div className='buton'>
              <Prais priseData={priseData}/>
        <Search searchProduct={searchProduct}/>
</div>
    <div className='product'>

       {filteredProducts?.map((item) => {
                return <ProductCart key={item.id} {...item}/>
            })}
    </div>
        
    </div>
  )
}

export default Home