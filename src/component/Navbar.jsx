import { Link } from "react-router-dom";
export function Navbar() {
  return (
   <nav className="py-8 bg-red-300">
    <div className="container ">
      <div className="flex justify-between">
          <div>
            <Link to="/">
               <span>WooCommerce</span>
            </Link>
          </div>
          <ul className="flex">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
      </div>
    </div>
   </nav>
  );
}


