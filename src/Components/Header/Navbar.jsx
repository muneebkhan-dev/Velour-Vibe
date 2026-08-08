import React from "react"
import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className="relative">
      <div className="nav-content max-w-7xl px-10 py-6 mx-auto flex justify-between items-center ">
        <div>
          <Link to='/'><h1 className="font-dm font-extrabold text-3xl tracking-tight">VELOUR.CO</h1></Link>
        </div>
        <ul className='font-dm flex gap-6'>
          <Link className="font-dm text-base" to='/shop'>Shop</Link>
          <Link className="font-dm text-base" to='/onsale'>On Sale</Link>
          <Link className="font-dm text-base" to='/newarrivals'>New Arrivals</Link>
          <Link className="font-dm text-base" to='/brands'>Brands</Link>
        </ul>
        <div className="bg-[#F0F0F0] text-gray-600 px-4 py-2 rounded-3xl w-2/5 flex items-center">
          <IoSearch className="size-5" />
          <input type="text" className="font-dm px-2 placeholder:text-sm outline-hidden" placeholder="Search for products..."/>
          
        </div>
        <div className="nav-icons flex gap-4">
          <FiShoppingCart className="size-6"/>
          <CgProfile className="size-6"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
