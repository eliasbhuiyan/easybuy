import axios from "axios";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/resetpassword`,
        {
          email: userData.email,
          password: userData.password,
        },
        {
          headers: {
            Authorization: `${searchParams.get("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate(`/login`);
        }, 3000);
        setUserData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  return (
    <section>
      <ToastContainer />
      <div className="shadow-xl p-10 rounded-xl mt-24 w-fit m-auto flex flex-col">
        <h2 className="text-xl font-semibold uppercase text-center pb-2">
          Forgot Password?
        </h2>
        <hr />
        <p className="text-lg font-medium py-2">
          Please enter your email and new password
        </p>
        <div className="flex flex-col">
          <input
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData.email}
            type="email"
            className="inputField h-14"
            required
            placeholder="Email Address *"
          />
          <input
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
            type="password"
            className="inputField h-14"
            required
            placeholder="New Password *"
          />
          <button onClick={handelSubmit} className="btn w-fit m-auto mt-4">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
