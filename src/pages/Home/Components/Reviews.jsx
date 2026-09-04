import React from "react"
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import { IoIosStar } from "react-icons/io"
import { FaCheckCircle } from "react-icons/fa";
import Rating from "../../../Components/Rating"
import ReviewCard from "../../../Components/ReviewCard";

const Reviews = () => {
  const ReviewsData = [
    {
      id: 1,
      rating: <Rating />,
      title: "Hamid T.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },

    {
      id: 2,
      rating: <Rating />,
      title: "Sarah M.",
      description:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },

    {
      id: 3,
      rating: <Rating />,
      title: "Ali K.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },

    {
      id: 4,
      rating: <Rating />,
      title: "Faiz L.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },

    {
      id: 5,
      rating: <Rating />,
      title: "Mooen",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ]

  return (
    <section className='relative py-10 md:py-20 overflow-hidden'>
      <div className='max-w-7xl px-4 md:px-10 md:pb-5 lg:pb-10 mx-auto'>
        <div className='flex justify-between items-end md:items-center'>
          <div>
            <h1 className='font-dm text-3xl lg:text-5xl font-extrabold leading-8 md:leading-none tracking-tighter md:tracking-normal'>
              OUR HAPPY CUSTOMERS
            </h1>
          </div>
          <div className='flex gap-3 md:gap-5 pb-1 md:pb-0'>
            <FaArrowLeft className='size-5 lg:size-6' />
            <FaArrowRight className='size-5 lg:size-6' />
          </div>
        </div>
      </div>
      <div className='relative overflow-x-auto scrollbar-none'>
        <div className='absolute left-0 top-0 bottom-0 w-20 md:bg-linear-to-r from-white via-white/40 lg:via-white/80 to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 bottom-0 w-16 md:w-24 md:bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none' />
        <div className='flex gap-5 py-5 md:py-10 px-4 md:px-0'>
          {ReviewsData.map((cards) => (
            <ReviewCard  key={cards.id || index} className="md:w-100" cards={cards}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
