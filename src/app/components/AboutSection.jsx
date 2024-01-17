"use client";
import React, { useTransition , useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Springboot</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor Degree of Computer Science of RUPP</li>
                <li>Fullstack course of SabaiCode</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor Degree of Computer Science of RUPP</li>
                <li>Fullstack course of SabaiCode</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransaction] = useTransition();

    const handleTabChange = (id) => {
        startTransaction(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I am a backend developer focused on building the invisible infrastructure of applications. 
                    My expertise lies in designing and implementing server-side logic, databases, and integrations. 
                    I prioritize clean code, scalability, and staying updated with the latest technologies. 
                    Collaboration with cross-functional teams is crucial to ensure cohesive and efficient end products.
                </p>
                <div className='flex flex-row justify-start mt-8 '>
                    <TabButton 
                        selectTab={() => {handleTabChange("skills")}} 
                        active={ tab === "skills"}
                    > 
                        Skills 
                    </TabButton>
                    <TabButton 
                        selectTab={() => {handleTabChange("education")}} 
                        active={ tab === "education"}
                    > 
                       Education
                    </TabButton>
                    <TabButton 
                        selectTab={() => {handleTabChange("certifications")}} 
                        active={ tab === "certifications"}
                    > 
                        Certifications
                    </TabButton>      
                </div>
                <div className='mt-8'>
                    {
                        TAB_DATA.find((t) => t.id === tab).content
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection