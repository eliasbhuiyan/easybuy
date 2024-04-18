import { useState } from "react";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
const NewArrivals = ({ product }) => {
  let [arrival, setArrival] = useState(false);
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow hover={arrival} />,
    prevArrow: <SamplePrevArrow hover={arrival} />,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div
      className="pb-14 md:pb-32 relative hover"
      onMouseOver={() => setArrival(true)}
      onMouseOut={() => setArrival(false)}
    >
      <div className="container">
        <h2 className="heading">New Arrivals</h2>
        <Slider {...settings}>
          {product.map(
            (item) =>
              item.status === "approved" && (
                <div key={item._id} className="relative mx-2 lg:mx-5">
                  <Product product={item} />
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
