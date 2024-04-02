import { useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import Breadcrumd from "../component/Breadcrumd";
const Signup = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [telePhone, setTelePhone] = useState("");
  let [addressOne, setAddressOne] = useState("");
  let [addressTwo, setAddressTwo] = useState("");
  let [city, setCity] = useState("");
  let [postCode, setPostCode] = useState("");
  let [password, setPassword] = useState("");
  let [policy, setPolicy] = useState(false);
  let handelPolicy = (e) => {
    setPolicy(e.target.checked);
  };
  let handelSubmit = async () => {
    // let response = await axios.post(
    //   "http://localhost:8000/auth/user/registation",
    //   {
    //     firstName,
    //     lastName,
    //     email,
    //     telePhone,
    //     addressOne,
    //     addressTwo,
    //     city,
    //     postCode,
    //     password,
    //     policy,
    //   }
    // );
    // setError(response.data);
  };

  return (
    <section>
      <div className="container">
        <Breadcrumd space="u" />
        <div className="pb-8 md:pb-16 border-b-2">
          <p className="font-dm font-normal text-secondary text-base w-full md:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the.
          </p>
        </div>
        <div>
          <h2 className="font-dm font-bold text-primary text-2xl md:text-4xl mt-14 mb-11">
            Your Personal Details
          </h2>
          <div className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  First Name
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="First name"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full font-dm font-medium text-lg">
                  {/* {error.firstNameErr} */}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Last Name
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="Last name"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full font-dm font-medium text-lg">
                  {/* {error.lastNameErr} */}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Email
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="email"
                    placeholder="Your email here"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full font-dm font-medium text-lg">
                  {/* {error.emailErr || error.existingEmailErr} */}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  TelePhone
                  <input
                    onChange={(e) => {
                      setTelePhone(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="number"
                    placeholder="Telephone"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full font-dm font-medium text-lg">
                  {/* {error.telePhoneErr} */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-dm font-bold text-primary text-2xl md:text-4xl mt-14 mb-11">
            New Customer
          </h2>
          <div className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Address 1
                  <input
                    onChange={(e) => {
                      setAddressOne(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="Address 1 here"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full font-dm text-lg font-medium">
                  {/* {error.addressOneErr} */}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Address 2
                  <input
                    onChange={(e) => {
                      setAddressTwo(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="Address 2"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  City
                  <input
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="Your City"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                  {/* {error.cityErr} */}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Post Code
                  <input
                    onChange={(e) => {
                      setPostCode(e.target.value);
                    }}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="text"
                    placeholder="Post Code"
                  />
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                  {/* {error.postCodeErr} */}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Country
                  <select
                    name=""
                    id=""
                    className="font-dm font-normal text-base text-secondary block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                  >
                    <option
                      className="font-dm font-normal text-base text-secondary"
                      disabled
                    >
                      Please select
                    </option>
                    <option
                      className="font-dm font-normal text-base text-secondary"
                      value=""
                    >
                      Bangladesh
                    </option>
                  </select>
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                  {}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Region/State
                  <select
                    name=""
                    id=""
                    className="font-dm font-normal text-base text-secondary block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                  >
                    <option
                      className="font-dm font-normal text-base text-secondary"
                      value=""
                    >
                      Please select
                    </option>
                    <option
                      className="font-dm font-normal text-base text-secondary"
                      value=""
                    >
                      Bangladesh
                    </option>
                  </select>
                </label>
                <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                  {}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-dm font-bold text-primary text-2xl md:text-4xl mt-14 mb-11">
            Your Password
          </h2>
          <div className="flex flex-col md:flex-row gap-10 border-b-2 pb-16">
            <div className="w-full md:w-1/3 relative">
              <label className="font-dm font-bold text-base">
                Password
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                  type="password"
                  placeholder="Password"
                />
              </label>
              <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                {/* {error.passwordErr} */}
              </p>
            </div>
            <div className="w-full md:w-1/3 relative">
              <label className="font-dm font-bold text-base">
                Repeat Password
                <input
                  className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                  type="password"
                  placeholder="Repeat Password"
                />
              </label>
              <p className="text-red-600 inline-block absolute left-0 top-full text-lg font-dm font-medium">
                {}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <label
            htmlFor="agree"
            className="text-secondary font-dm font-normal text-base cursor-pointer flex items-center gap-2"
          >
            <input onClick={handelPolicy} type="checkbox" id="agree" />I have
            read and agree to the Privacy Policy
            {/* {error.policyErr && (
              <BsFillExclamationCircleFill className="text-red-700 text-xl animate-bounce" />
            )} */}
          </label>
          <div className="flex gap-8 my-7">
            <p className="text-secondary font-dm font-normal text-base">
              Subscribe Newsletter
            </p>
            <label htmlFor="yes" className="cursor-pointer">
              <input type="radio" id="yes" className=" mr-3" name="yesNo" />
              Yes
            </label>
            <label htmlFor="no" className="cursor-pointer">
              <input type="radio" id="no" className=" mr-3" name="yesNo" />
              No
            </label>
          </div>
          <button
            onClick={handelSubmit}
            className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
