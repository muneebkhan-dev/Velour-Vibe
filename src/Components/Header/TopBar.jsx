import React from "react"
import { MdClose } from "react-icons/md"

const TopBar = () => {
  return (
    <section className='relative bg-black'>
        <div className="max-w-7xl flex">
      <div className='text-white py-2 text-base font-light'>
        Sign up and get 20% off to your first order.
        <span className='underline font-medium px-2'>Sign Up Now</span>
      </div>
      <div className="flex items-center">
          <MdClose className="text-white"/>ereq
      </div>
      </div>
    </section>
  )
}

export default TopBar
