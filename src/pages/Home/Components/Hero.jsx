import React from "react"

const Hero = () => {
  return (
    <section className="hero-section relative w-full bg-[#F2F0F1] lg:bg-[url('/src/assets/images/hero.png')] lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center">
      <div className='hero-cont max-w-7xl md:px-5 lg:px-10 mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center'>
        <div className='w-auto md:w-1/2 lg:w-auto flex justify-center items-center px-5 md:px-0'>
          <div className='hero__content flex flex-col gap-7 md:gap-5 lg:gap-10 items-center md:items-start lg:items-start'>
            <div className='hero__info lg:w-1/2 flex flex-col gap-4 md:gap-4 lg:gap-6 text-start pt-10 md:pt-0'>
              <h1 className='font-dm text-4xl md:text-3xl lg:text-6xl  font-[900] md:font-extrabold tracking-tighter'>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className='w-auto md:w-2/3 lg:w-auto font-dm text-[#000000]/60 text-base md:text-sm lg:text-base'>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div>
                <button className='font-dm text-base md:text-sm lg:text-base bg-black w-full md:w-auto md:px-10 lg:px-16 py-3 md:py-2 lg:py-3 rounded-3xl text-white'>
                  Shop Now
                </button>
              </div>
            </div>
            <div className='hero__social-proof hidden md:flex'>
              <div className='inter-brands pr-3 lg:pr-6 flex flex-col gap-2 border-r-2 border-gray-300'>
                <span className='text-2xl lg:text-5xl text-black font-semibold'>
                  200+
                </span>
                <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                  International Brands
                </p>
              </div>
              <div className='high-quality-product px-2 lg:px-6 flex flex-col gap-2 border-r-2 border-gray-300'>
                <span className='text-2xl lg:text-5xl text-black font-semibold'>
                  2,000+
                </span>
                <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                  High-Quality Products
                </p>
              </div>
              <div className='happy-cust px-2 lg:px-6 flex flex-col gap-2 '>
                <span className='text-2xl lg:text-5xl text-black font-semibold'>
                  30,000+
                </span>
                <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                  Happy Customers
                </p>
              </div>
            </div>
            <div className='hero__social-proof flex flex-col gap-5 md:hidden'>
              <div className="flex">
                <div className='inter-brands pr-4 md:pr-3 lg:pr-6 flex flex-col gap-2 border-r-2 border-gray-300'>
                  <span className='text-3xl md:text-2xl lg:text-5xl text-black font-semibold'>
                    200+
                  </span>
                  <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                    International Brands
                  </p>
                </div>
                <div className='high-quality-product pl-3 md:px-2 lg:px-6 flex flex-col gap-2 border-none md:border-r-2 border-gray-300'>
                  <span className='text-3xl md:text-2xl lg:text-5xl text-black font-semibold'>
                    2,000+
                  </span>
                  <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className='happy-cust px-2 lg:px-6 flex flex-col gap-2 '>
                  <span className='text-3xl md:text-2xl lg:text-5xl text-black font-semibold'>
                    30,000+
                  </span>
                  <p className='font-dm text-xs lg:text-base text-[#000000]/60'>
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden w-full md:w-1/2 lg:w-1/2'>
          <img
            className='w-full'
            src='/src/assets/images/mobile-banner.png'
            alt=''
          />
        </div>
      </div>
      <img
        src='/src/assets/images/Vector (1).png'
        alt=''
        className='hidden decorator-img1 w-[7%] absolute top-1/7 right-1/18'
      />
      <img
        src='/src/assets/images/Vector (2).png'
        alt=''
        className=' hidden decorator-img2  w-[5%] lg:w-auto absolute top-3/7 right-4/9 lg:right-3/7'
      />
    </section>
  )
}

export default Hero
