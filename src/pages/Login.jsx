import { useState } from "react";
import Breadcrumd from "../component/Breadcrumd";

const Login = () => {
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [password, setPassword] = useState("");
  let [passwoedErr, setPasswordErr] = useState("");
  let handelEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handelPassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  let handelPost = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("What's your Email ?");
    } else if (!password) {
      setPasswordErr("What's your password ?");
    }
  };
  return (
    <section>
      <div className="container">
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
          <form className="border-b-2 pb-16">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Email
                  <input
                    onChange={handelEmail}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="email"
                    placeholder="Your email here"
                  />
                </label>
                <p className="text-red-400 inline-block absolute left-0 top-full font-dm font-medium">
                  {emailErr}
                </p>
              </div>
              <div className="w-full md:w-1/3 relative">
                <label className="font-dm font-bold text-base">
                  Password
                  <input
                    onChange={handelPassword}
                    className="font-dm font-normal text-base block pt-2 pb-4 pl-1 border-b-2 w-2/3 md:w-full"
                    type="password"
                    placeholder="Your password here"
                  />
                </label>
                <p className="text-red-400 inline-block absolute left-0 top-full font-dm font-medium">
                  {passwoedErr}
                </p>
              </div>
            </div>
            <button
              onClick={handelPost}
              className="border-2 border-primary bg-bg py-4 px-20 font-dm font-bold text-base text-primary mt-8 rounded-md"
            >
              Log in
            </button>
          </form>
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
          <button className="border-none py-4 px-20 bg-primary font-dm font-bold text-base text-white mt-8 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
