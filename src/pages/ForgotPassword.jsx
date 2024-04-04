import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ForgotPassword = () => {
  let [email, setEmail] = useState("");
  const handelSubmit = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}auth/forgotpassword`,
        {
          email,
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
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  return (
    <section>
      <ToastContainer />
      <div className="w-fit m-auto flex flex-col mt-24 shadow-xl p-10 rounded-xl">
        <h2 className="text-xl font-semibold uppercase text-center pb-4">
          Forgot Password?
        </h2>
        <hr />
        <p className="text-lg font-medium py-2">
          Please enter your email address to reset your password
        </p>
        <div className="flex flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="inputField h-14"
            required
            placeholder="Email Address *"
          />
          <button onClick={handelSubmit} className="btn w-fit m-auto mt-4">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
