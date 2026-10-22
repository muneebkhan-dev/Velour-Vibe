import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import ProductHero from './Components/ProductHero'
import ProductInfoTabs from './Components/ProductInfoTabs'
import RelativeProducts from './Components/RelativeProducts'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
        <Breadcrumb />
        <ProductHero id={id}/>
        <ProductInfoTabs/>
        <RelativeProducts/>
    </>
  )
}

export default ProductDetails