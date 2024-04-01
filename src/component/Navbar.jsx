import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu } from "@headlessui/react";
export function Navbar() {
  return (
    <nav className="py-8 bg-bg sticky top-0 left-0 w-full z-50">
      <div className="container ">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="w-20 inline-block">
              <img src="/logo-2.png" className="w-full" alt="logo" />
            </Link>
          </div>
          <ul className="flex">
            <li>
              <Link
                to="/"
                className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Menu as="div" className="flex gap-1 cursor-pointer relative">
            <Menu.Button className="flex">
              <FaUserSecret className="text-xl" />
              <IoMdArrowDropdown className="text-2xl" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-full z-10 mt-2 w-56 shadow-lg">
              <div className="py-1">
                <Menu.Item>
                  {() => (
                    <Link
                      to="/"
                      className="block text-center py-3 bg-primary text-white"
                    >
                      My Account
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {() => (
                    <Link to="/" className="py-3 text-center block">
                      Sign Up
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
