import { useEffect } from "react";
import { GiCrossMark } from "react-icons/gi";
import { ShowCart } from "../api/api";
import { useSelector } from "react-redux";

export const CartNav = () => {
  const user = useSelector((state) => state.user_sec.user);
  useEffect(() => {
    ShowCart(user.auth)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="absolute top-full right-0 shadow-sm md:w-[400px] w-60">
      <div className="flex items-center flex-wrap justify-between md:p-5 p-3 bg-bg">
        <div className="w-24 h-24 order-1">
          <img className="w-full" src="images/cart.png" />
        </div>
        <div className="order-last md:order-2">
          <h2>Black Smart Watch</h2>
          <p>$44.00</p>
        </div>
        <p className="order-3">
          <GiCrossMark />
        </p>
      </div>
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
    </div>
  );
};
