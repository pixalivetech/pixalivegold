import React from 'react'
import Headermain from './../Components/Header/Headerhero'
import Hero from '../Components/Home/Hero'
import Network from '../Components/Home/Network'
import TrendingProducts from '../Components/Home/Trending'
import SecuredBy from '../Components/Home/Secured'
import Divisions from '../Components/Home/Division'
import CustomerReview from '../Components/Home/Review'
import Contact from '../Components/Home/Contact'
import MainHome from '../Components/MainHome'
import GoldDotsSection from '../Components/Home/GoldDotsSection'
import GoldNetwork from '../Components/Home/GoldNetwork'
import FAQ from '../Components/Home/FaqSection'
import BlogPage from '../Components/About/Blog'
import PixaliveGoldSection from '../Components/Home/PixaliveGoldSection'
import Testimonials from '../Components/Home/Testimonials'
import Banner from '../Components/Home/banner'


const Home = () => {
  return (
    <div>
      <MainHome  />
       {/* <Headermain /> */}
       <SecuredBy/>
       
       <Network/>
       <GoldDotsSection/>
       <GoldNetwork/>
       <FAQ/>
       
       <PixaliveGoldSection/>
       
       <Testimonials/>
       <BlogPage/>
       <Banner/>

       
     
      
      
    </div>
  )
}

export default Home
