import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../reducer/userSlice";
import { CartNav } from "./CartNav";
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
          <div className="flex items-center gap-6">
            <details className="relative cursor-pointer">
              <summary>
                {user?.avatar ? (
                  <img
                    src={user?.avatar}
                    alt="user"
                    className="w-12 h-12 rounded-full border inline-block"
                  />
                ) : (
                  <FaUserSecret className="text-2xl inline-block" />
                )}
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
                      className="py-3 text-center w-full bg-white"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <Link
                      to="/signup"
                      className="py-3 text-center block bg-white"
                    >
                      Sign Up
                    </Link>
                  )}
                </div>
              </div>
            </details>
            {/* ========== Cart Start ========== */}
            {user && (
              <details className="relative cursor-pointer">
                <summary>
                  <FaShoppingBag className="text-2xl inline-block" />
                </summary>
                <CartNav />
              </details>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
