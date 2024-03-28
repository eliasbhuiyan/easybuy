import { useEffect, useState } from 'react'
import Breadcrumd from '../component/Breadcrumd';
import { Pagination } from '../component/Pagination';
import { Sidebar } from '../component/Sidebar';

export const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [fixed, setFixed] = useState(false);
  useEffect(()=>{
        window.addEventListener("scroll",function(){
          let scrolling = window.scrollY;
          if(scrolling > 300){
            setFixed(true)
          }else{
            setFixed(false)
          }
        })
  },[])
  return (
    <div>
      <div className="container">
       <Breadcrumd/>
      <div className='flex flex-col md:flex-row gap-x-10'>
        <div  className='w-full md:w-1/4 relative'>
          <div className={fixed&&'w-full fixed md:sticky top-[100px] left-0 z-40 md:z-0 bg-bg md:bg-white dropfixedMenu transition-all pl-3 md:pl-0 shadow-[0_1px_0px_rgb(0,0,0,0.12)] md:shadow-none md:pb-48 md:h-screen md:overflow-y-scroll scrl'}>
           <Sidebar className="flex md:flex-col flex-row w-full overflow-x-scroll md:overflow-x-hidden scrl"/>
          </div>
        </div>
        <div className='w-full md:w-9/12'>
          <div className='flex justify-end gap-x-1 md:gap-x-10 mb-14'>
            <div>
              <label htmlFor="featured" className="mb-2 text-sm font-medium text-secondary mr-3">Sort by:</label>
              <select id="featured" className="w-auto md:w-60 border text-secondary text-sm font-dm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5">
                <option hidden selected>Featured</option>
                <option value="Nagin">Nagin Dance</option>
                <option value="Nagin">Nagin Dance</option>
                <option value="Nagin">Nagin Dance</option>
                <option value="Nagin">Nagin Dance</option>
              </select>
            </div>
            <div>
              <label htmlFor="show" className="mb-2 text-sm font-medium text-secondary mr-3">Show:</label>
              <select onChange={(e)=>setShowNumber(+e.target.value)} id="show" className="w-auto md:w-60 border text-secondary text-sm font-dm rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2.5">
                <option selected value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </div>
      </div>
    </div>
  )
}