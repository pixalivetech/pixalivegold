import React from 'react';

// import Hero from '../Components/Division/Hero1';
import Divisions from '../Components/Division/Divisions';
import Benefits from '../Components/Division/Benefits';
import Blogs from '../Components/Division/Blogs';
import StrategicDivision from '../Components/Division/StrategicDivision';
import Divisionhero from '../Components/Division/Divisionhero';

function Services() {
  return (
    <>
      <Divisionhero />
      {/* <Hero /> */}
      <StrategicDivision/>
      <Divisions />
      <Benefits />
      <Blogs />
     
   
    </>
  );
}

export default Services;
