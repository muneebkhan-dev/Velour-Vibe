import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Brands from "./pages/Brands"
import NewArrivals from "./pages/NewArrivals"
import OnSale from "./pages/OnSale"
import MainLayout from "./Layout/MainLayout"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart"
import Shop from "./pages/shop/shop"


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
        <Route path="/cart" element={<Cart/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
