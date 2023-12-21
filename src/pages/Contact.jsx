import React, { useState } from 'react'
import Breadcrumd from '../component/Breadcrumd'
export const Contact = () => {
    let [name, setName] = useState('')
    let [nameErr, setNameErr] = useState('')
    let [email, setEmail] = useState('')
    let [emailErr, setEmailErr] = useState('')
    let [message, setMessage] = useState('')
    let [messageErr, setMessageErr] = useState('')
    let handelName = (e)=>{
        setName(e.target.value)
        setNameErr('')
    }
    let handelEmail = (e)=>{
        setEmail(e.target.value)
        setEmailErr('')
    }
    let handelMessage = (e)=>{
        setMessage(e.target.value)
        setMessageErr('')
    }
    let handelPost =(e)=>{
          e.preventDefault()
          if(!name){
            setNameErr("What's your name ?")
          }else if(!email){
            setEmailErr("What's your email ?")
          }else if(!message){
            setMessageErr("What's your message ?")
          }
    } 
  return (
    <section>
      <div className='container'>
        <Breadcrumd/>
        <h2 className='font-dm font-bold text-primary text-4xl'>Fill up a Form</h2>
        <form>
            <div className='mt-11 relative'>
                <label className='font-dm font-bold text-base'>Name
                 <input onChange={handelName} className='font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-3/4 md:w-1/2' type="text" placeholder='Your name here'/>
                </label>
                <p className='text-red-400 inline-block absolute left-0 top-full font-dm font-medium'>{nameErr}</p>
            </div>
            <div className='mt-6 relative'>
                <label className='font-dm font-bold text-base'>Email
                 <input onChange={handelEmail} className='font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-3/4 md:w-1/2' type="email" placeholder='Your email here'/>
                </label>
                <p className='text-red-400 inline-block absolute left-0 top-full font-dm font-medium'>{emailErr}</p>
            </div>
            <div className='mt-6 relative'>
                <label className='font-dm font-bold text-base'>Message
                 <textarea onChange={handelMessage} className='font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-3/4 md:w-1/2' type="text" placeholder='Your message here'/>
                </label>
                <p className='text-red-400 inline-block absolute left-0 top-full font-dm font-medium'>{messageErr}</p>
            </div>
            <button onClick={handelPost} className='border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md'>Post</button>
        </form>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69355.3769993826!2d91.03521534046422!3d23.994258842071574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375405bd30bb4f23%3A0x1b3b2e1fce26f623!2sBrahmanbaria!5e0!3m2!1sen!2sbd!4v1703189100458!5m2!1sen!2sbd"
         className="w-full h-36 md:h-[577px] my-14 md:my-32 rounded-xl"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </section>
  )
}