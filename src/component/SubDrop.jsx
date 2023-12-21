import React, { useEffect, useRef, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export const SubDrop = ({dropDown,title,subCatagory,color}) => {
  let ref = useRef()
    let [show, setShow] = useState(false)
    let [drop, setDrop] = useState(dropDown)
    useEffect(()=>{
        document.body.addEventListener("click",function(e){
           if(e.target.contains(ref.current)){
            setShow(!show)
          }else{
             setShow(false)
           }
        })
        
    },[])
  return (
    <div className='mt-3 w-full'>
      {
        drop
        ?<div>
        <h2  className='font-dm font-normal text-secondary text-lg flex justify-between items-center cursor-pointer border-b pb-3'>
        <span ref={ref}>{title}</span>
        <AiOutlinePlus className={show?'rotate-180 transition-all text-xl':'transition-all text-xl'}/></h2>
      {
        show&&
      <div>
        {
          subCatagory &&
          subCatagory.map((item)=>(
            <p className='font-dm font-normal text-secondary text-sm cursor-pointer py-2 hover:ml-2 transition-all'>{item.name}</p>
          ))
        }
      </div>
      }
      </div>
        :
        <>
        <h2 className='font-dm font-normal text-secondary text-lg cursor-pointer border-b pb-3'> 
        {
          color && <span className={`inline-block w-3 h-3 mr-3 rounded-full`}
          style={{background: color}}
         ></span>
        }
        
        {title}</h2>
        </>
      }
        
      
    </div>
  )
}
