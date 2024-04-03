import { useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import Breadcrumd from "../component/Breadcrumd";
import { PropagateLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { InputBox } from "../component/InputBox";
import { Title } from "../component/Title";
import Details from "../component/Details";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [policyErr, setPolicyErr] = useState(false);
  const [regData, setRegData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    addressOne: "",
    addressTwo: "",
    zipCode: "",
    city: "",
    country: "",
    state: "",
  });
  let handelPolicy = (e) => {
    setPolicy(e.target.checked);
    setPolicyErr(false);
  };
  const handelSubmit = () => {
    if (!policy) {
      setPolicyErr(true);
      return;
    }
    setLoadingBtn(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}auth/registration`, regData, {
        headers: {
          Authorization: `Bearer user@${import.meta.env.VITE_PUBLICROUTE}@${
            import.meta.env.VITE_SWTSECRT
          }`,
        },
      })
      .then((res) => {
        toast.success(res.data.success, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate(`/otp/:${res.data.userId}`);
        }, 3000);
        setRegData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
          addressOne: "",
          addressTwo: "",
          zipCode: "",
          city: "",
          country: "",
          state: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "bottom-center",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setLoadingBtn(false);
      });
  };

  return (
    <section>
      <div className="container">
        <ToastContainer />
        <Breadcrumd space="u" />
        <div className="pb-8 md:pb-16 border-b-2">
          <Details>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the.
          </Details>
        </div>
        <div>
          <Title title={"Your Personal Details"} />
          <div className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <InputBox
                value={regData.fullName}
                onChange={(e) =>
                  setRegData({ ...regData, fullName: e.target.value })
                }
                title={"Full Name *"}
                placeholder="Your full name here"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <InputBox
                value={regData.email}
                onChange={(e) =>
                  setRegData({ ...regData, email: e.target.value })
                }
                title={"Email *"}
                placeholder="Your email here"
              />
              <InputBox
                value={regData.phone}
                onChange={(e) =>
                  setRegData({ ...regData, phone: e.target.value })
                }
                title={"Telephone"}
                placeholder="Telephone"
              />
            </div>
          </div>
        </div>
        <div>
          <Title title={"New Customer"} />
          <div className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <InputBox
                value={regData.addressOne}
                onChange={(e) =>
                  setRegData({ ...regData, addressOne: e.target.value })
                }
                title={"Address 1 *"}
                placeholder="Address 1 here"
              />
              <InputBox
                value={regData.addressTwo}
                onChange={(e) =>
                  setRegData({ ...regData, addressTwo: e.target.value })
                }
                title={"Address 2 *"}
                placeholder="Address 2 here"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <InputBox
                value={regData.city}
                onChange={(e) =>
                  setRegData({ ...regData, city: e.target.value })
                }
                title={"City"}
                placeholder="Your City"
              />
              <InputBox
                value={regData.zipCode}
                onChange={(e) =>
                  setRegData({ ...regData, zipCode: e.target.value })
                }
                title={"Post Code"}
                placeholder="Post Code"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <InputBox
                value={regData.country}
                onChange={(e) =>
                  setRegData({ ...regData, country: e.target.value })
                }
                title={"Country"}
                placeholder="Country"
              />
              <InputBox
                value={regData.state}
                onChange={(e) =>
                  setRegData({ ...regData, state: e.target.value })
                }
                title={"Region/State"}
                placeholder="Region/State"
              />
            </div>
          </div>
        </div>
        <div>
          <Title title={"Your Password"} />
          <div className="flex flex-col md:flex-row gap-10 border-b-2 pb-16">
            <InputBox
              value={regData.password}
              onChange={(e) =>
                setRegData({ ...regData, password: e.target.value })
              }
              title={"Password *"}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="pt-16">
          <label
            htmlFor="agree"
            className="text-secondary font-dm font-normal text-base cursor-pointer flex items-center gap-2"
          >
            <input onClick={handelPolicy} type="checkbox" id="agree" />I have
            read and agree to the Privacy Policy
            {policyErr && (
              <BsFillExclamationCircleFill className="text-red-700 text-xl animate-bounce" />
            )}
          </label>

          {loadingBtn ? (
            <button className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md">
              <PropagateLoader color="#fff" size={20} className="pb-3" />
            </button>
          ) : (
            <button
              onClick={handelSubmit}
              className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Signup;
