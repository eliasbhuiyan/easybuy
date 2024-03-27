import { Link } from "react-router-dom";
export function Navbar() {
  return (
   <nav className="py-8 bg-bg sticky top-0 left-0 w-full z-50">
    <div className="container ">
      <div className="flex justify-between">
          <div>
            <Link to="/">
             <img src="/logo.png" className="w-[100px]" alt="" />
            </Link>
          </div>
          <ul className="flex">
            <li>
            <Link to="/" className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer">Home</Link>
            </li>
            <li>
            <Link to="/product" className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer">Product</Link>
            </li>
            <li>
            <Link to="/about" className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer">About</Link>
            </li>
            <li>
            <Link to="/contact" className="text-primary text-lg font-semibold px-8 py-2 md:px-5 md:py-0 hover:bg-[#F5F5F3] rounded-md transition-all cursor-pointer">Contact</Link>
            </li>
          </ul>
      </div>
    </div>
   </nav>
  );
}


