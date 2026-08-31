import React from "react"
import { FaCheckCircle } from "react-icons/fa";

const ReviewCard = ({ cards }) => {

  // const ReviewCards = [
  //   {
  //     id: 1,
  //     img: "/src/assets/images/CardImages/proimg-1.png",
  //     title: "T-shirt with Tape",
  //     rating: 4.5,
  //     price: "$120",
      
  //     category: "shirts",
  //   },
  // ]

  return (
    <section>
        <div className='w-[calc(100vw-48px)] md:w-100 shrink-0 border-2 border-gray-200 p-5 md:p-6 rounded-3xl flex flex-col gap-3'>
          <span>{cards.rating}</span>
          <h3 className='font-dm text-xl font-bold flex items-center gap-2'>
            {cards.title}
            <FaCheckCircle className='text-green-500' />
          </h3>
          <p className='font-dm text-base md:text-[15px] text-gray-500'>
            "{cards.description}"
          </p>
        </div> 
    </section>
  )
}

export default ReviewCard
