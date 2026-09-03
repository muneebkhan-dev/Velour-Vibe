import React from "react"
import { FiSliders } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io";
import ReviewCard from "../../../Components/ReviewCard";
import Rating from "../../../Components/Rating"

const RatingReviews = () => {

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
    <section className='relative py-5'>
      <div className='max-w-7xl w-full mx-auto px-10'>
        <div className="flex justify-between">
          <div className='flex gap-2 items-center'>
            <h2 className='font-dm font-bold text-lg'>All Reviews</h2>
            <span className='font-dm text-sm text-gray-500'>(451)</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              <FiSliders className="size-5"/>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 py-3 px-5 rounded-3xl">
                <button className="font-dm text-sm">
                    Latest
                </button>
                <IoIosArrowDown className="size-4" />
            </div>
            <div className="flex items-center gap-2">
                <button className="font-dm bg-black text-white text-sm py-3 px-5 rounded-3xl">
                    Right a Review
                </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
       {ReviewsData.map((cards) => (
           <ReviewCard cards={cards}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default RatingReviews
