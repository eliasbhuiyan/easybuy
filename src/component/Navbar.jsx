import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../reducer/userSlice";
export function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_sec.user);
  const hendelSignOut = () => {
    document.cookie = `sec_token= null;`;
    dispatch(loggedUser(null));
  };
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
          <div className="flex items-center gap-5">
            <details className="relative cursor-pointer">
              <summary>
                <FaUserSecret className="text-xl inline-block" />
              </summary>
              <div className="py-1 absolute top-full right-0 w-48 shadow-lg">
                <div>
                  {user ? (
                    <Link
                      to="/account"
                      className="block text-center py-3 bg-primary text-white"
                    >
                      My Account
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="block text-center py-3 bg-primary text-white"
                    >
                      LogIn
                    </Link>
                  )}
                </div>
                <div>
                  {user ? (
                    <button
                      onClick={hendelSignOut}
                      className="py-3 text-center w-full"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <Link to="/signup" className="py-3 text-center block">
                      Sign Up
                    </Link>
                  )}
                </div>
              </div>
            </details>
            {/* ========== Cart Start ========== */}
            <details className="relative cursor-pointer">
              <summary>
                <FaShoppingBag className="text-xl inline-block" />
              </summary>
              <div className="absolute top-full right-0 shadow-sm md:w-[400px] w-60">
                <div className="flex items-center flex-wrap justify-between md:p-5 p-3 bg-bg">
                  <div className="w-24 h-24 order-1">
                    <img className="w-full" src="images/cart.png" />
                  </div>
                  <div className="order-last md:order-2">
                    <h2>Black Smart Watch</h2>
                    <p>$44.00</p>
                  </div>
                  <p className="order-3">
                    <GiCrossMark />
                  </p>
                </div>
                <div className="p-3 md:p-5 bg-white">
                  <p className="py-4 text-secondary font-dm font-bold text-lg">
                    Subtotal: <span className="text-primary">$44.00</span>
                  </p>
                  <div className="flex justify-between">
                    <button className="py-2 md:py-4 px-4 md:px-10 border-2 border-primary rounded-3xl text-primary font-dm font-bold text-sm md:text-lg">
                      View Cart
                    </button>
                    <button className="py-2 md:py-4 px-4 md:px-10 bg-primary rounded-3xl text-white font-dm font-bold text-sm md:text-lg">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
