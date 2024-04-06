import { useEffect, useState } from "react";
import AdditionalInfo from "../component/AdditionalInfo";
import Advertise from "../component/Advertise";
import Banner from "../component/Banner";
import BestSells from "../component/BestSells";
import NewArrivals from "../component/NewArrivals";
import Offer from "../component/Offer";
import SpecialOffer from "../component/SpecialOffer";
import { ProductData } from "../api/api";

export const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      await ProductData()
        .then((res) => {
          setProduct(res.data.product);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, []);
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrivals product={product} />
      <BestSells product={product} />
      <Offer />
      <SpecialOffer product={product} />
    </>
  );
};
