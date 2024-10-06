import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import { animateWithGSAP } from '../utils/animations.js';
import {explore1Img, exploreVideo,explore2Img} from '../utils/index.js'
import gsap from 'gsap';
const Features = () => {

    const videoRef = useRef();

    useGSAP(()=>{
        animateWithGSAP('#features_title',
        {
            opacity: 1,
            y: 0
        }),
        animateWithGSAP('.g_grow',
        {
            scale: 1,
            opacity: 1,
            ease: 'power1',

        }
        ),
        gsap.to('.g_text',{
            scrollTrigger: {
                trigger: '.g_text',
                start: 'top 80%',
                end: 'bottom top',
                toggleActions: 'restart reverse restart reverse',
            },
            opacity: 1,
            y: 0,
            ease: 'power2.inOut'
        }),
        gsap.to('#exploreVideo',
        {
            scrollTrigger: 
            {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play()
            }
        }
        )
    },[]);


  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id='features_title' className='section-heading'>
                    Explore the full story.
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>
                        Forged in titanium.
                    </h2>
                </div>
                <div className='flex-center flex-col sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video 
                            ref={videoRef} 
                            id='exploreVideo' 
                            muted 
                            autoPlay 
                            preload='none' 
                            className='w-full h-full object-cover object-center'  
                            playsInline 
                            src={exploreVideo} 
                            type='video/mp4'>
                        </video>
                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} alt="titanium" className='feature-video g_grow' />
                            </div>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore2Img} alt="titanium1" className='feature-video g_grow' />
                            </div>
                        </div>
                        <div className='feature-text-container'>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>
                                    iPhone 15 pro is {' '}
                                    <span className='text-white'>
                                        the first iPhone to feature an aerospace-grade titanium design
                                    </span>, 
                                    using the same materials found in the latest spacecrafts.
                                </p>
                            </div>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>
                                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                    <span className='text-white'>
                                        lightest Pro models ever.
                                    </span>, 
                                    You'll notive the difference the moment you pick one up.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features