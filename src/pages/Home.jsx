import React from 'react'
import Hero from '../components/Hero'
import Baner from '../components/baner'
import OfferSection from '../components/OfferSection'
import Product from '../components/product'
import Menswear from '../components/Menswear'
import Womanwear from '../components/Womanwear'
import Footweargym from '../components/Footweargym'



export default function Home() {
  return (
    <div>
      <Hero/>
      <Product/>
     <Baner/>
     <OfferSection/>
   <Menswear/>
   <Womanwear/>
   <Footweargym/>
     
  
    </div>
  )
}
