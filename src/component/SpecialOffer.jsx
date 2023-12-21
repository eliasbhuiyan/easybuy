import { useState } from 'react'
import Product from './Product'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
const SpecialOffer = () => {
    let [arrival, setArrival] =useState(false)
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow hover={arrival}/>,
        prevArrow: <SamplePrevArrow hover={arrival}/>,
        responsive: [
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
          ]
      };
  return (
    <div onMouseOver={()=>setArrival(true)} onMouseOut={()=>setArrival(false)}>
        <div className="container">
            <h2 className='heading'>Special Offers</h2>
          <Slider {...settings}>
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-1.png"/>
                    <div>
                        <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-2.png" badge={true}/>
                    <div>
                    <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-3.png"/>
                    <div>
                    <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-3.png" badge={true}/>
                    <div>
                    <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-4.png"/>
                    <div>
                    <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
           <div>
             <div className='relative  mx-2 lg:mx-5'>
                    <Product src="images/specialOffer-3.png" badge={true}/>
                    <div>
                    <div className="flex justify-between gap-x-1 pt-2 pb-2 lg:pt-6 lg:pb-4">
                            <h2 className='font-dn font-bold text-primary text-sm'>Basic Crew Neck Tee</h2>
                            <p className='font-dn font-normal text-secondary text-xs'>$44.00</p>
                        </div>
                        <p className='font-dn font-normal text-secondary text-sm'>Black</p>
                    </div>
              </div>    
            </div>     
        </Slider>
        </div>      
    </div>
  )
}

export default SpecialOffer

