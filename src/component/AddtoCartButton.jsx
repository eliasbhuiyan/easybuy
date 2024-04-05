import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { cartList } from "../reducer/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { LoginForm } from "./LoginForm";
import { useState } from "react";
const AddtoCartButton = ({ productId, variant, quantity }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_sec.user);
  const [show, setShow] = useState(false);
  const handelAdd = () => {
    if (!user) {
      setShow(true);
    } else {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}product/addtocart`,
          {
            userId: user.auth,
            productId: productId._id,
            variantId: variant,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer user@${user.auth}@${
                import.meta.env.VITE_SWTSECRT
              }`,
            },
          }
        )
        .then((res) => {
          if (res.data.info) {
            toast.info(res.data.info, {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          }
          if (res.data.message) {
            toast.error(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          }
          if (res.data.cartList) {
            localStorage.setItem(
              "product_cart",
              JSON.stringify(res.data.cartList)
            );
            dispatch(cartList(res.data.cartList));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      {show && <LoginForm />}
      <ToastContainer />
      <button onClick={handelAdd} className="btn">
        Add To Cart
      </button>
    </>
  );
};
AddtoCartButton.propTypes = {
  productId: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default AddtoCartButton;
