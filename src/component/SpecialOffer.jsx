import { useState } from "react";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const SpecialOffer = ({ product }) => {
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
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      onMouseOver={() => setArrival(true)}
      onMouseOut={() => setArrival(false)}
    >
      <div className="container">
        <h2 className="heading">Special Offers</h2>
        <Slider {...settings}>
          {product.map(
            (item) =>
              item.status === "approved" && (
                <div key={item._id} className="relative mx-2 lg:mx-5">
                  <Product product={item} width={"w-full"} />
                </div>
              )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialOffer;
