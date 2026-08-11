import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"
import { FaCartShopping } from "react-icons/fa6"
import { CgProfile } from "react-icons/cg"
import { IoMenu } from "react-icons/io5"
import { MdDiscount } from "react-icons/md"
import { IoSparkles } from "react-icons/io5"
import { IoStorefront } from "react-icons/io5"
import { IoChevronForwardOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='relative'>
      <div className='nav-content max-w-7xl px-4 md:px-10 lg:px-10 py-6 mx-auto flex justify-between items-center '>
        <div className='flex gap-3 md:gap-5 lg:gap-5'>
          <button
            className='lg:hidden cursor-pointer z-40'
            onClick={() => setMenuOpen(true)}
          >
            <IoMenu className='size-7' />
          </button>
          <Link to='/'>
            <h1 className='font-dm font-extrabold text-xl lg:text-3xl tracking-tight'>
              VELOUR.CO
            </h1>
          </Link>
        </div>
        <ul className='font-dm gap-6 hidden lg:flex'>
          <Link className='font-dm text-base' to='/shop'>
            Shop
          </Link>
          <Link className='font-dm text-base' to='/onsale'>
            On Sale
          </Link>
          <Link className='font-dm text-base' to='/newarrivals'>
            New Arrivals
          </Link>
          <Link className='font-dm text-base' to='/brands'>
            Brands
          </Link>
        </ul>
        <div
          className={`flex flex-col lg:hidden fixed top-0 right-0 px-7 py-7 bg-white h-full w-64 shadow-lg transform transition-transform duration-300 font-dm gap-10  ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <button className="flex justify-end text-lg font-bold cursor-pointer" onClick={() => {setMenuOpen(false)}}>✕</button>
          <div className="flex gap-7">
            <ul className='flex flex-col gap-10'>
              <li>
                <FaCartShopping className='size-7' />
              </li>
              <li>
                <MdDiscount className='size-7' />
              </li>
              <li>
                <IoSparkles className='size-7' />
              </li>
              <li>
                <IoStorefront className='size-7' />
              </li>
            </ul>
            <ul className='flex flex-col gap-10 w-full'>
              <Link className='flex items-center justify-between font-dm text-lg' to='/shop'>
                Shop
                <IoChevronForwardOutline />
              </Link>
              <Link className='flex items-center justify-between font-dm text-lg' to='/onsale'>
                On Sale
                <IoChevronForwardOutline />
              </Link>
              <Link className='flex items-center justify-between font-dm text-lg' to='/newarrivals'>
                New Arrivals
                <IoChevronForwardOutline />
              </Link>
              <Link className='flex items-center justify-between font-dm text-lg' to='/brands'>
                Brands
                <IoChevronForwardOutline />
              </Link>
            </ul>
          </div>
        </div>
        <div className='bg-[#F0F0F0] text-gray-600 px-4 py-2 rounded-3xl w-2/5 hidden lg:flex items-center'>
          <IoSearch className='size-5' />
          <input
            type='text'
            className='font-dm px-2 placeholder:text-sm outline-hidden'
            placeholder='Search for products...'
          />
        </div>
        <div className='nav-icons flex gap-3 md:gap-4 lg:gap-4'>
          <IoSearch className='flex lg:hidden size-6' />
          <FiShoppingCart className='size-6' />
          <CgProfile className='size-6' />
        </div>
      </div>
      {menuOpen && (
        <div
          className='fixed inset-0 bg-white/40 z-40'
          onClick={() => {
            setMenuOpen(false)
          }}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
