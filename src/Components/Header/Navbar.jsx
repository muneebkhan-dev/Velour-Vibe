import React from "react"
import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className="relative bg-amber-300">
      <div className="max-w-7xl px-3 py-7 mx-auto flex justify-center items-center gap-10">
        <div>
          <Link to='/'><h1 className="font-dm font-extrabold text-2xl">VELOUR.CO</h1></Link>
        </div>
        <ul className='font-dm flex gap-5'>
          <Link to='/shop'>Shop</Link>
          <Link to='/onsale'>On Sale</Link>
          <Link to='/newarrivals'>New Arrivals</Link>
          <Link to='/brands'>Brands</Link>
        </ul>
        <div className="bg-[#F0F0F0] text-[#000000]/40 px-3 py-2 rounded-2xl w-2/5 flex items-center">
          <IoSearch className="size-6" />
          <p className="font-dm px-2 text-sm">Search for products...</p>
        </div>
        <div className="flex gap-4">
          <FiShoppingCart className="size-6"/>
          <CgProfile className="size-6"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
