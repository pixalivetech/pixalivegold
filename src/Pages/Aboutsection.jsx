import React from 'react'
import Hero from '../Components/About/Hero'
import Vision from '../Components/About/Vission'
import PartnershipSection from '../Components/About/Partner'
// import Secured from '../Components/About/Secured'
import TestimonialSection from '../Components/About/Testimonial'
import BlogPage from '../Components/About/Blog'
import Securedsection from '../Components/About/Securedby'
import RevolutionSection from '../Components/About/Revolution'

const Aboutsection = () => {
  return (
    <div>
      
      <Hero/>
      <Vision/>
      <PartnershipSection/>
      <Securedsection/>
      {/* <Secured/>  */}
      <TestimonialSection/>
      <BlogPage/>
      <RevolutionSection/>
    </div>
  )
}

export default Aboutsection
