import React from "react"

const Hero = () => {
  return (
    <section className="relative bg-[url('/src/assets/images/hero.png')] bg-cover min-h-screen flex items-center">
      <div className='max-w-7xl px-10 mx-auto flex flex-col gap-10'>
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className='font-dm text-6xl font-extrabold tracking-tighter'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-dm text-[#000000]/60 text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
          <button className="font-dm text-base bg-black px-16 py-4 rounded-3xl text-white">
            Shop Now
          </button>
          </div>
        </div>
        <div className="flex gap-0">
            <div className="pr-6 flex flex-col gap-2 border-r-2 border-gray-300">
                <span className="text-5xl text-black font-semibold">200+</span>
                <p className="font-dm text-base text-[#000000]/60">International Brands</p>
            </div>
            <div className="px-6 flex flex-col gap-2 border-r-2 border-gray-300">
                <span className="text-5xl text-black font-semibold">2,000+</span>
                <p className="font-dm text-base text-[#000000]/60">High-Quality Products</p>
            </div>
            <div className="px-6 flex flex-col gap-2 ">
                <span className="text-5xl text-black font-semibold">30,000+</span>
                <p className="font-dm text-base text-[#000000]/60">Happy Customers</p>
            </div>
        </div>
      </div>
      <div>
      <img src="/src/assets/images/Vector (1).png" alt="" />
      </div>
    </section>
  )
}

export default Hero
