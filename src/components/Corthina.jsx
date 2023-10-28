import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Corthina = () => {
  return (
    <div>
        <Link to={"/coreth"}>
        <BsCart2/>
        </Link>
    </div>
  )
}

export default Corthina