import React, { useEffect, useRef, useState } from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import { SubDrop } from './SubDrop';
export const SidebarDrop = ({title,heading}) => {
  let [show, setShow] = useState(false)
  let ref = useRef();
  useEffect(()=>{
    let WinnerWidth = document.body.clientWidth;
    if(WinnerWidth < 768){
      document.body.addEventListener("click",function(e){
        if(ref.current.contains(e.target)){
          setShow(!show)
        }else{
          setShow(false)
        }
      })
    }else{      
        setShow(true)
    }
  },[])  
  return (
    <div ref={ref}>
      <div onClick={()=>setShow(!show)} className='py-3 md:py-0 md:mt-10 relative'>
          <h2 className='font-dm w-[150px] md:w-full font-normal md:font-bold text-primary text-sm md:text-xl flex md:justify-between items-center cursor-pointer'>
          <span>{title}</span>
          <IoMdArrowDropdown className={show?'rotate-180 transition-all text-xl':'transition-all text-xl'}/></h2>
      </div>
    {
      show&&
    
      <div className="w-full px-3 absolute md:static top-full left-0 z-40 bg-bg md:bg-white rounded-lg">
        {
          heading.map((item)=>(
            <SubDrop dropDown={item.subCatagory? true: false} title={item.name} color={item.code && item.code} subCatagory={item.subCatagory && item.subCatagory}/>
          ))
        }
      </div>
}
    </div>
  )
}