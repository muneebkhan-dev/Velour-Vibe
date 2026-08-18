import React from 'react'

const BrandBar = () => {
  return (
    <section className="relative bg-black py-10 w-full flex justify-center">
        <ul className="max-w-7xl flex flex-wrap md:flex-nowrap items-center justify-center gap-7 md:gap-15 lg:gap-22 px-2 md:px-10 lg:px-15">
            <li className='w-1/3 md:w-auto'><a href="#"><img src="/src/assets/logos/versace.png" alt="" /></a></li>
            <li className='w-1/6 md:w-auto'><a href="#"><img src="/src/assets/logos/zara.png" alt="" /></a></li>
            <li className='w-1/3 md:w-auto'><a href="#"><img src="/src/assets/logos/gucci.png" alt="" /></a></li>
            <li className='w-1/3 md:w-auto'><a href="#"><img src="/src/assets/logos/prada.png" alt="" /></a></li>
            <li className='w-2/5 md:w-auto'><a href="#"><img src="/src/assets/logos/calvin-klein.png" alt="" /></a></li>
        </ul>
        </section>
  )
}

export default BrandBar