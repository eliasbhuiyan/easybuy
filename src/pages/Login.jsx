import { useState } from "react";
import Breadcrumd from "../component/Breadcrumd";
import axios from "axios";
import { InputBox } from "../component/InputBox";
import { ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { loggedUser } from "../reducer/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
            navigate("/");
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
          toast.error(err.response?.data.error, {
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
    <section>
      <div className="container">
        <ToastContainer />
        <Breadcrumd />
        <div className="pb-8 md:pb-16 border-b-2">
          <p className="font-dm font-normal text-secondary text-base w-full md:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the.
          </p>
        </div>
        <div>
          <h2 className="font-dm font-bold text-primary text-2xl md:text-4xl mt-14 mb-11">
            Returning Customer
          </h2>
          <div className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <InputBox
                title={"Email *"}
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <InputBox
                title={"Password *"}
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>

            {loadingBtn ? (
              <button className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md">
                <PropagateLoader color="#fff" size={20} className="pb-3" />
              </button>
            ) : (
              <button
                onClick={handelLogin}
                className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md"
              >
                Log In
              </button>
            )}
            <div className="text-primary mt-5">
              <Link to="/forgotpassword">Forgotten password?</Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-dm font-bold text-primary text-2xl md:text-4xl mt-14 mb-11">
            New Customer
          </h2>
          <p className="font-dm font-normal text-secondary text-base w-full md:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the.
          </p>
          <Link
            to="/signup"
            className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white rounded-md mt-5 inline-block"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
