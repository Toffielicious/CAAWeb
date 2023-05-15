
import React from "react";
import Navbar from '@components/navbar.js'
import Slider from "@components/slider.js";
import { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';




export default function Home() {



  return (
    <>

      <Navbar />

      <section className="sliderSection" >

      <Slider />
      </section>



      <section />

      <p>hello</p>

   
    
    </>

  )
}