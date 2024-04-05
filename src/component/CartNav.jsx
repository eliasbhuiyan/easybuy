import { GiCrossMark } from "react-icons/gi";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ShowCart } from "../api/api";

export const CartNav = () => {
  const user = useSelector((state) => state.user_sec.user);
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    ShowCart(user.auth).then((res) => {
      setCartProduct(res.data);
    });
  }, []);
  return (
    <>
      <summary
        className={`relative after:absolute after:text-center ${cartProduct.length}     after:bottom-5 after:text-white after:leading-[20px] after:w-5 after:h-5 after:bg-green-500 after:rounded-full`}
      >
        <FaShoppingBag className="text-2xl inline-block" />
      </summary>
      <div className="absolute top-full right-0 shadow-xl md:w-[400px] w-60">
        {cartProduct.length > 0 ? (
          cartProduct.map((item) => (
            <div
              key={item._id}
              className="flex items-center flex-wrap justify-between md:p-5 p-3 bg-bg"
            >
              <div className="w-24 h-24 order-1 shadow-sm">
                <img className="w-full" src={item.variant.image} />
              </div>
              <div className="order-last md:order-2">
                <h2>{item.product.name}</h2>
                <p>{item.variant.sellingPrice} Tk</p>
              </div>
              <p className="order-3">
                <GiCrossMark />
              </p>
            </div>
          ))
        ) : (
          <p className="flex items-center justify-center md:p-5 p-3 bg-bg text-primary font-semibold text-xl">
            {cartProduct.message}
          </p>
        )}
        {cartProduct.length > 0 && (
          <div className="p-3 md:p-5 bg-white">
            <p className="py-4 text-secondary font-dm font-bold text-lg">
              Subtotal: <span className="text-primary">$44.00</span>
            </p>
            <div className="flex justify-between">
              <button className="py-2 md:py-4 px-4 md:px-10 border-2 border-primary rounded-3xl text-primary font-dm font-bold text-sm md:text-lg">
                View Cart
              </button>
              <button className="py-2 md:py-4 px-4 md:px-10 bg-primary rounded-3xl text-white font-dm font-bold text-sm md:text-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
