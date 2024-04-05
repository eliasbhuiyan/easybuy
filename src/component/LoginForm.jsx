import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedUser } from "../reducer/userSlice";
import { cartList } from "../reducer/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { useState } from "react";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handelLogin = () => {
    setLoadingBtn(true);
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}auth/login`,
          {
            email: loginData.email,
            password: loginData.password,
          },
          {
            headers: {
              Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
                import.meta.env.VITE_SWTSECRT
              }`,
            },
          }
        )
        .then((res) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          let currentTime = new Date().getTime();
          let expirationTime = new Date(currentTime + 10 * 24 * 60 * 60 * 1000);
          let expires = expirationTime.toUTCString();
          document.cookie = `sec_token=${res.data.sec_token}; expires=${expires};`;
          localStorage.setItem(
            "product_cart",
            JSON.stringify(res.data.cartList)
          );
          dispatch(loggedUser(res.data.userObject));
          dispatch(cartList(res.data.cartList));
          setLoadingBtn(false);
        })
        .catch((err) => {
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setLoadingBtn(false);
        });
    } catch (error) {
      console.log("Faild to login!");
    }
  };
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <ToastContainer />
      <div className="form-container">
        <p className="title">Login</p>
        <div className="form">
          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <div className="forgot mt-3 mb-1">
              <Link to="/forgotpass">Forgot Password ?</Link>
            </div>
          </div>
          {loadingBtn ? (
            <button className="sign">
              <PropagateLoader color="#fff" size={20} className="pb-3" />
            </button>
          ) : (
            <button onClick={handelLogin} className="sign">
              Sign in
            </button>
          )}
        </div>
        <p className="signup mt-3">
          Don't have an account?
          <Link rel="noopener noreferrer" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
