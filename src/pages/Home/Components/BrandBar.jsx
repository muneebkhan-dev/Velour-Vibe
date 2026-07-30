import React from 'react'

const BrandBar = () => {
  return (
    <section className="relative bg-black py-10 w-full">
        <ul className="flex items-center justify-center gap-22">
            <li><a href=""><img src="/src/assets/logos/versace.png" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/logos/zara.png" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/logos/gucci.png" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/logos/prada.png" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/logos/calvin-klein.png" alt="" /></a></li>
        </ul>
        </section>
  )
}

export default BrandBar