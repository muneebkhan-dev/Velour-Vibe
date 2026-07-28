import React from "react"
import { MdClose } from "react-icons/md"

const TopBar = () => {
  return (
    <section className='relative bg-black'>
      <div className="flex justify-end">
          <div className='font-poppins w-1/2 text-white py-2 text-sm'>
            Sign up and get 20% off to your first order.
            <span className='underline font-medium text-sm px-2'>
              Sign Up Now
            </span>
          </div>
        <div className='flex items-center mr-40'>
          <MdClose className='text-white size-5' />
        </div>
      </div>
    </section>
  )
}

export default TopBar
