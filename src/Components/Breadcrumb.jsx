import React from "react"
import { IoIosArrowForward } from "react-icons/io";


const Breadcrumb = () => {
  return (
    <section className='relative py-10'>
      <div className='max-w-7xl mx-auto px-15'>
        <div>
          <ul className="flex items-center gap-4 "> 
            <li className="font-dm text-gray-400">Home</li>
            <IoIosArrowForward  className="text-gray-500"/>
            <li className="font-dm text-gray-400">Shop</li>
            <IoIosArrowForward  className="text-gray-500"/>
            <li className="font-dm text-gray-400">Men</li>
            <IoIosArrowForward className="text-gray-500" />
            <li>T-shirts</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
