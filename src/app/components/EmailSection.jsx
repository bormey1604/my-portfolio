"use client"
import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from 'next/link';

const EmailSection = () => {
  const [emailSummitted, setEmailSummitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    console.log(endpoint);
    console.log(data)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSONdata
    }
    const response = await fetch(endpoint , options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200){
        console.log('Messager sent.');
        setEmailSummitted(true);
    }
  }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 lg:px-[50px]'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    <FaGithub className='w-10 h-10 text-white'/>
                </Link>
                <Link href="github.com">
                    < FaLinkedin className='w-10 h-10 text-white'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" type="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                    <input 
                        name='email'
                        type="email" 
                        id='email' 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        required 
                        placeholder='meymey@gmail.com'
                    />
                </div>
                <div  className='mb-6'>
                    <label htmlFor="subject" type="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input 
                        name='subject'
                        type="text" 
                        id='subject' 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        required 
                        placeholder='Just saying hi!'
                    />
                </div>
                <div  className='mb-6'>
                    <label htmlFor="message" type="subject" className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea 
                        name="message" 
                        id='message' 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                        required 
                        placeholder="Let's talking about ..."
                    />
                </div>
                <button 
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send Message
                </button>
                {
                    emailSummitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection