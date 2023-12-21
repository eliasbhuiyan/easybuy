import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
const Banner = () => {
    let [activeDots, setActiveDots] = useState(0)
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setActiveDots(next);
          },
        appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '5%',
                transform: "translateY(-50%)",
                width: "30px",
                borderRight: "5px #fff solid",
              }}
            >
              <ul style={{ margin: "0px"}}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i === activeDots ? {
                    width: "30px",
                    height: '30px',
                    color: "#262626",
                    borderRight: "5px #000 solid",
                  } : {
                    width: "100%",
                    height: '30px',
                    color: "#262626",
                    visibility: 'hidden',
                  }
            }
            >
              0{i + 1}
            </div>
          ) ,
          responsive: [
            {
              breakpoint: 737,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                beforeChange: (prev, next) => {
                  setActiveDots(next);
                },
              appendDots: dots => (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '5%',
                      transform: "translateY(-50%)",
                      width: "20px",
                      borderRight: "5px #fff solid",
                    }}
                  >
                    <ul style={{ margin: "0px"}}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div
                  style={
                      i === activeDots ? {
                        width: "20px",
                        color: "#262626",
                        borderRight: "5px #000 solid",
                        fontSize: "12px",
                      } : {
                        width: "20px",
                        color: "#262626",
                        visibility: 'hidden',
                      }
                  }
                  >
                    0{i + 1}
                  </div>
                ) ,
              }
            },
          ]       
      };
      
  return (
    <Slider {...settings}>
          <div>
            <Link to='#'>
             <img className="w-full h-full" src={"images/banner.png"}/>
            </Link>
          </div>
          <div>
            <Link to='#'>
             <img className="w-full h-full" src={"images/banner.png"}/>
            </Link>
          </div>
          <div>
            <Link to='#'>
             <img className="w-full h-full" src={"images/banner.png"}/>
            </Link>
          </div>
               
        </Slider>
  )
}

export default Banner
