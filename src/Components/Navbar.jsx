import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/onsale">OnSale</Link>
            <Link to="/newarrivals">NewArrivals</Link>
            <Link to="/brands">Brands</Link>
        </ul>
    </nav>
  )
}

export default Navbar