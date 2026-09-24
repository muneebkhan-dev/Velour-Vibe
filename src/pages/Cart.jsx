import React from 'react'
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";
import Breadcrumb from '../Components/Breadcrumb';

const Cart = () => {

  const cartItems = [
    {
      id: 1,
      img: "/src/assets/images/CardImages/proimg-1.png",
      title: "T-shirt with Tape",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 2,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 3,
      img: "/src/assets/images/CardImages/proimg-3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: "/src/assets/images/CardImages/proimg-4.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 5,
      img: "/src/assets/images/CardImages/proimg-1.png",
      title: "T-shirt with Tape",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 6,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 7,
      img: "/src/assets/images/CardImages/proimg-3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 8,
      img: "/src/assets/images/CardImages/proimg-4.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 9,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },
    
  ]

  return (
    <>
    <Breadcrumb/>
     <section className="w-full px-4 pb-8 pt-0 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-7 text-3xl font-extrabold tracking-tight sm:text-4xl">
          YOUR CART
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="border border-gray-200 p-3 sm:p-4 rounded-2xl">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex min-h-[105px] gap-3 border-b border-gray-200 p-2.5 sm:gap-4 sm:p-3"
                >
                  <div className="h-[82px] w-[72px] shrink-0 overflow-hidden bg-gray-100 sm:h-[92px] sm:w-[82px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between pr-8">
                    <div>
                      <h3 className="truncate text-sm font-semibold sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-gray-500 sm:text-xs">
                        Size: {item.size}
                      </p>
                      <p className="text-[11px] text-gray-500 sm:text-xs">
                        Color: {item.color}
                      </p>
                    </div>
                    <p className="text-sm font-semibold sm:text-base">
                      {item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-red-500 transition hover:scale-110"
                  >
                    <FiTrash2 className="text-base sm:text-lg" />
                  </button>
                  <div className="absolute bottom-2 right-2 flex h-7 items-center rounded-full bg-gray-100 px-2 sm:h-8">
                    <button
                      type="button"
                      className="flex h-6 w-5 items-center justify-center text-gray-600 hover:text-black"
                    >
                      <FiMinus className="text-xs" />
                    </button>
                    <span className="w-5 text-center text-xs font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="flex h-6 w-5 items-center justify-center text-gray-600 hover:text-black"
                    >
                      <FiPlus className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 sm:p-6">
            <h2 className="mb-6 text-lg font-semibold">
              Order Summary
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Subtotal
              </span>
              <span className="text-sm font-semibold">
                $565
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Discount (-20%)
              </span>
              <span className="text-sm font-semibold text-red-500">
                -$113
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Delivery Fee
              </span>
              <span className="text-sm font-semibold">
                $15
              </span>
            </div>
            <div className="my-5 border-t border-gray-200" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Total
              </span>

              <span className="text-xl font-bold">
                $467
              </span>
            </div>
            <div className="mt-5 flex gap-2">
              <div className="flex min-w-0 flex-1 items-center rounded-full bg-gray-100 px-4">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-transparent py-2 text-xs outline-none placeholder:text-gray-400"
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-black px-5 py-2 text-xs font-medium text-white transition hover:bg-gray-800"
              >
                Apply
              </button>
            </div>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-xs font-medium text-white transition hover:bg-gray-800"
            >
              Go to Checkout
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cart