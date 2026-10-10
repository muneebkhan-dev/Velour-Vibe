import React from "react"
import { IoIosStar } from "react-icons/io"
import { LiaStarHalfSolid } from "react-icons/lia"

const Rating = ({ rating }) => {
  const totalStars = 5

  return (
    <div className='flex items-center gap-1 text-[#FFC633]'>
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1
        if (starNumber <= Math.floor(rating)) {
          return (
            <IoIosStar
              key={index}
              className='size-4 md:size-4 lg:size-5'
              fill='#FFC107'
              color='#FFC107'
            />
          )
        } else if (
          starNumber === Math.ceil(rating) &&
          !Number.isInteger(rating)
        ) {
          return (
            <LiaStarHalfSolid
              key={index}
              className='size-4 md:size-4 lg:size-5'
              fill='#FFC107'
              color='#FFC107'
            />
          )
        } else {
          return (
            <IoIosStar
              key={index}
              className='size-4 md:size-4 lg:size-5'
              color='#e0e0e0'
            />
          )
        }
      })}
      <span style={{ fontSize: "14px", marginLeft: "6px", color: "#666" }}>
        ({rating})
      </span>
    </div>
  )
}

export default Rating
