import React from 'react'
import Hero from '../components/Hero'
import Baner from '../components/baner'
import OfferSection from '../components/OfferSection'
import Product from '../components/product'
import Menswear from '../components/Menswear'
import Womanwear from '../components/Womanwear'
import Footweargym from '../components/Footweargym'
import BrandSlider from '../components/Brandslider'
import Stats from '../components/States'



export default function Home() {
  return (
    <div>
      <Hero/>
      <Product/>
     <Baner/>
     
     <OfferSection/>
     <BrandSlider/>
   <Menswear/>
   <Womanwear/>
   <Footweargym/>
   <Stats/> 
      
  
    </div>
  )
}
