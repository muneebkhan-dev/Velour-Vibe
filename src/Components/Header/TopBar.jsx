import React from "react"
import { MdClose } from "react-icons/md"

const TopBar = () => {
  return (
    <section className='relative bg-black'>
      <div className="'max-w-7xl mx-auto flex justify-center md:justify-end lg:justify-end">
          <div className='font-poppins md:w-1/2 lg:w-1/2 text-white py-2 text-xs md:text-sm lg:text-sm'>
            Sign up and get 20% off to your first order.
            <span className='underline font-medium text-xs md:text-sm lg:text-sm px-2'>
              Sign Up Now
            </span>
          </div>
        <div className='hidden md:flex lg:flex items-center mr-20 md:mr-40 lg:mr-40'>
          <MdClose className='text-white size-5' />
        </div>
      </div>
    </section>
  )
}

export default TopBar
