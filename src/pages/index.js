
import React from "react"
import Navbar from '@components/navbar.js'
import Slider from "@components/slider.js"
import Fab from '@components/fab.js'
import { whoNews } from "@/helpers/newsdata.js"
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
      <div className="flex flex-wrap justify-center mt-14 font-brown">
          <div className="flex flex-wrap w-3/4 content-container-container">
            <div className="w-full content-text">
              <div className="pt-40 title">
                <h1 className="font-bold text-brown">News and Updates</h1>
              </div>
              <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
                {whoNews.map((news, index) => (
                  <div key={index} className="news">
                    <div className="text-rd hover:underline">
                      <a href={news.link} target="_blank">{news.title}</a>
                    </div>
                    <p>Posted: {news.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Fab/>
    </>

  )
}