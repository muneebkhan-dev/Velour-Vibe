import React from "react"

const CategoryGrid = () => {
    
  const Categories = [
    {
      id: 1,
      img: "/src/assets/images/casual.png",
      isLarge: false,
    },

    {
      id: 2,
      img: "/src/assets/images/formal.png",
      isLarge: true,
    },

    {
      id: 3,
      img: "/src/assets/images/party.png",
      isLarge: true,
    },

    {
      id: 4,
      img: "/src/assets/images/gym.png",
      isLarge: false,
    },
  ]

  return (
    <section className='relative flex justify-center py-10 px-15 '>
      <div className='max-w-7xl w-full bg-[#F0F0F0] rounded-4xl py-15'>
        <div className='font-dm text-5xl font-extrabold flex justify-center pb-15 '>
          <h1>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className='grid grid-cols-3 gap-5 px-20'>
          {Categories.map((category) => (
              <div
                className={`relative h-70 rounded-4xl bg-cover bg-center bg-no-repeat ${
                  category.isLarge ? "col-span-2" : "col-span-1"
                }`}
                key={category.id}
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div>{category.title}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
