import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel.jsx'

const Highlights = () => {

  useGSAP(()=>{
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    }),
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      delay: 0.5
    })
  },[])


  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
            <h1 id="title" className="section-heading">
              Get the Highlights.
            </h1>
            <div className='flex fex-wrap items-end gap-5'>
                <p className='link gap-4'>Watch the film <img src={watchImg} alt="Watch" /></p>
                <p className='link gap-4'>Watch the event <img src={rightImg} alt="Watch" /></p>
            </div>
        </div>
        <VideoCarousel />
      </div>

    </section>
  )
}

export default Highlights