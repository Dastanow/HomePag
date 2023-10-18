import React from 'react'

const Prais = ({ priseData }) => {
  return (
    <div>
        <input onChange={(e) => priseData(e.target.value)} type="number" placeholder='Price...' />
    </div>
  )
}

export default Prais