import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import ProductHero from './Components/ProductHero'
import ProductInfoTabs from './Components/ProductInfoTabs'
import RelativeProducts from './Components/RelativeProducts'

const ProductDetails = () => {
  return (
    <>
        <Breadcrumb/>
        <ProductHero/>
        <ProductInfoTabs/>
        <RelativeProducts/>
    </>
  )
}

export default ProductDetails