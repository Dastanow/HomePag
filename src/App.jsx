import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Corthina from './components/Corthina';

function App() {

  const [products, setProducts] = useState();
  const [filteredProducts, setfilterProduct] = useState([]);
  const [priseSort, setPriseSort] = useState();


  useEffect(() => {
const fetchData = async () => {
  const respons = await axios.get("https://api.escuelajs.co/api/v1/products");
  setProducts(respons.data);
  setfilterProduct(respons.data)
  setPriseSort(respons.data)
  return respons?.data;
};
fetchData()
console.log(setProducts);
  }, [])

  return (
    <>
    {}
    <Routes>
      <Route path="/" element={<Home data={products} setfilterProduct={setfilterProduct} filteredProducts={filteredProducts } setPriseSort={setPriseSort} priseSort={priseSort}/>}/>
      <Route path="/coreth" element={< Corthina/>}/>
    </Routes>
        </>
  )
}

export default App
