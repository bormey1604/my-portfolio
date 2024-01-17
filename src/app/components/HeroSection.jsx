"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"


const HeroSection = () => {
  return (
    <section className='py-10 lg:py-10 2xl:py-16'>
       <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
                initial = {{ opacity: 0, scale: 0.5 }}
                animate = {{ opacity: 1, scale: 1 }}
                transition = {{duration: 0.5}}
                className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-3xl sm:text-5xl​​ lg:text-5xl xl:text-6xl xl:leading-normal lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 '>Hello, I'm {""}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Bormey',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Backend Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block' }}
                        repeat={Infinity}
                    />
        
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Tech lover who turns ideas into reality with code. Always learning, forever curious. Let's create something awesome together!.
                </p>
                <div>
                    <button className='px-6 py-3 w-full mb-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500  via-purple-500 to-pink-500  hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full mb-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500  via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
                initial = {{ opacity: 0, scale: 0.5 }}
                animate = {{ opacity: 1, scale: 1 }}
                transition = {{duration: 0.5}}
                className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                     <Image 
                        src='/images/myphoto.png' 
                        alt='my photo' 
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300} 
                        height={500}/>
                </div>
            </motion.div>
       </div>
    </section>
  )
}

export default HeroSection