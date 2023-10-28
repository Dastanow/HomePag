import React from 'react'
import '../styls/prise.scss'

const Prais = ({ priseData, DataPrize }) => {
  return (
    <div>
        <input onChange={(e) => DataPrize(e.target.value) } type="range" min="0"  max="1000" step="10" placeholder='Price...'  />
        <span style={{fontSize: "30px"}}>-</span>
        <input onChange={(e) => priseData(e.target.value) } type="range" min="0"  max="1000" step="10" placeholder='Price...'  />
        {/* <span>-</span> */}
      
    </div>
  )
}

export default Prais