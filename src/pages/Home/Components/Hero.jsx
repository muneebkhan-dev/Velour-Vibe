import React from "react"

const Hero = () => {
  return (
    <section className="hero-section relative w-full bg-[#F2F0F1] lg:bg-[url('/src/assets/images/hero.png')] min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div className='hero-cont max-w-7xl px-10 mx-auto flex justify-center'>
        <div className="flex flex-col gap-10">
          <div className='w-2/3 lg:w-1/2 flex flex-col gap-6'>
            <h1 className='font-dm text-5xl lg:text-6xl font-extrabold tracking-tighter'>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className='md:w-2/3 lg:w-auto font-dm text-[#000000]/60 text-base'>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <button className='font-dm text-lg lg:text-base bg-black px-16 py-3 rounded-3xl text-white'>
                Shop Now
              </button>
            </div>
          </div>
          <div className='hero__social-proof flex pl-8 lg:pl-0'>
            <div className='inter-brands pr-6 flex flex-col gap-2 border-r-2 border-gray-300'>
              <span className='text-5xl text-black font-semibold'>200+</span>
              <p className='font-dm text-base text-[#000000]/60'>
                International Brands
              </p>
            </div>
            <div className='high-quality-product px-6 flex flex-col gap-2 border-r-2 border-gray-300'>
              <span className='text-5xl text-black font-semibold'>2,000+</span>
              <p className='font-dm text-base text-[#000000]/60'>
                High-Quality Products
              </p>
            </div>
            <div className='happy-cust px-6 flex flex-col gap-2 '>
              <span className='text-5xl text-black font-semibold'>30,000+</span>
              <p className='font-dm text-base text-[#000000]/60'>
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
        <img src='/src/assets/images/mobile-banner.png' alt='' />
      </div>
      </div>
      <img
        src='/src/assets/images/Vector (1).png'
        alt=''
        className='decorator-img1 w-[7%] absolute top-1/7 right-1/18'
      />
      <img
        src='/src/assets/images/Vector (2).png'
        alt=''
        className='decorator-img2 absolute top-3/7 right-3/7'
      />
    </section>
  )
}

export default Hero
