import React from "react"
import Navbar from "../../Components/Header/Navbar"
import Hero from "./Components/Hero"
import BrandBar from "./Components/BrandBar"
import NewArrivalsSection from "./Components/NewArrivalsSection"


const Home = () => {
  return (
    <>
      <Hero/>
      <BrandBar/>
      <NewArrivalsSection/>
    </>
  )
}

export default Home
