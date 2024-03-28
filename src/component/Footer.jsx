import {FaFacebookF} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-bg py-14 mt-14 md:mt-32">
      <div className="container">
        <div className="flex flex-wrap gap-x-7 md:gap-x-36 gap-y-5 xl:gap-y-0 px-3 xl:px-0">
          <div >
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <ul>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Home</li>
              <li
               className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Shop</li>
              <li
               className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >About</li>
              <li
               className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Contact</li>
              <li
               className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Journal1</li>
            </ul>
          </div>
          <div >
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <ul>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"                
              >Catagory 1</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"
              >Category 2</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Category 3</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Category 4</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-secondary after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Category 5</li>
            </ul>
          </div>
          <div >
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <ul>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-red-500 after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Privacy Policy</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-red-500 after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Terms & Conditions</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-red-500 after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Special E-shop</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-red-500 after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Shipping</li>
              <li
                className="font-regular mt-2 font-dm text-sm text-secondary relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-4 after:bg-red-500 after:w-2 after:h-2 after:rounded-full after:hidden hover:after:block"

              >Secure Payments</li>
            </ul>
          </div>
          <div className="flex xl:gap-x-64 flex-col xl:flex-row">
            <div className=" mb-4">
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-secondary">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <Link to="/" className="w-36 inline-block">
             <img src="/logo-2.png" className="w-full" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-between gap-y-3 mt-16">
            <ul className="flex gap-x-6">
                <li className="text-primary"><FaFacebookF/></li>
                <li><GrLinkedinOption className="text-primary"/></li>
                <li><AiOutlineInstagram className="text-primary"/></li>
            </ul>
            <p className="font-regular font-dm text-xs sm:text-sm text-secondary">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
