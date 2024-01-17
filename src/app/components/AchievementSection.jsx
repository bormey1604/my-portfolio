"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
    () => {
       return import ("react-animated-numbers")
    },
    { ssr: false}
    
)

const AchievementList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+"
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "5",
    },
]

const AchievementSection = () => {
  return (
    <div className='py-8 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 md:px-16 flex flex-row items-center justify-between'>
            {
                AchievementList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex  flex-col items-center justify-center mx-4'>
                            <h2 className='text-white font-bold md:text-4xl flex flex-row'>
                                {achievement.prefix}
                                <AnimatedNumbers
                                includeComma
                                className='text-white font-bold'
                                animateToNumber={parseInt(achievement.value)}
                                locale='en-US'   
                                configs={(_, index) =>{
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index +1)
                                    };
                                  }
                                }
                                />
                                {achievement.postfix}
                            </h2>
                            <h2 className='text-[#ADB7BE] text-base'>{achievement.metric}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AchievementSection