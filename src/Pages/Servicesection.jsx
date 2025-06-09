import React from 'react'
import Servicehero from '../Components/Services/Servicehero'
import Servicestartegic from '../Components/Services/Servicestartegic'
import Servicecards from '../Components/Services/Servicecards'
import Benefits from '../Components/Services/Benefits'
import Hero from '../Components/Services/Hero'
import Authentication from '../Components/Services/Authentication'

const Servicesection = () => {
  return (
    <div>
       <Hero/>
      <Servicehero/>
      <Servicecards/>
      <Benefits/>
      <Servicestartegic/>
      <Authentication/>

    </div>
  )
}

export default Servicesection