import React from "react"

const CategoryGrid = () => {
    
  const Categories = [
    {
      id: 1,
      title: "Casual",
      img: "/src/assets/images/casual.png",
      isLarge: false,
    },

    {
      id: 2,
      title: "Formal",
      img: "/src/assets/images/formal.png",
      isLarge: true,
    },

    {
      id: 3,
      title: "Party",
      img: "/src/assets/images/party.png",
      isLarge: true,
    },

    {
      id: 4,
      title: "Gym",
      img: "/src/assets/images/gym.png",
      isLarge: false,
    },
  ]

  return (
    <section className='relative flex justify-center py-5 md:py-8 lg:py-10 px-3 md:px-10 lg:px-15 '>
      <div className='max-w-7xl w-full bg-[#F0F0F0] rounded-3xl md:rounded-4xl py-6 md:pt-10 lg:py-15'>
        <div className='font-dm text-3xl md:text-4xl lg:text-5xl font-extrabold flex justify-center pt-4 md:pt-0 pb-6 md:pb-10 text-center tracking-tighter md:tracking-normal leading-8 md:leading-none'>
          <h1 className="w-3/4 md:w-auto">BROWSE BY DRESS STYLE</h1>
        </div>
        <div className='grid grid-cols-3 gap-3 lg:gap-5 px-5 lg:px-20'>
          {Categories.map((category) => (
              <div
                className={`relative  h-[30vh] lg:h-[40vh] rounded-4xl bg-cover bg-center bg-no-repeat ${
                  category.isLarge ? "col-span-3 md:col-span-2" : "col-span-3 md:col-span-1"
                }`}
                key={category.id}
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className="font-dm text-2xl lg:text-3xl font-bold p-6">{category.title}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
