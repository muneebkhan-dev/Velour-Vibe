import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Brands from "./pages/Brands"
import NewArrivals from "./pages/NewArrivals"
import OnSale from "./pages/OnSale"
import MainLayout from "./Layout/MainLayout"
import ProductDetails from "./pages/ProductDetails/ProductDetails"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="/shop" element={<Shop/>}/> 
        <Route path="/onsale" element={<OnSale/>}/> 
        <Route path="/newarrivals" element={<NewArrivals/>}/> 
        <Route path="/brands" element={<Brands/>}/> 
        <Route path="/productdetails" element={<ProductDetails/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
