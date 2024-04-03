import { Layout } from "./component/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Shop } from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Error from "./pages/Error";
import Account from "./pages/Account";
import OtpPage from "./pages/OtpPage";
const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Shop />} />
        <Route path="/productdetails/:slug" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp/:userId" element={<OtpPage />} />
        <Route path="/*" element={<Error />} />
      </Route>
    )
  );
};
function App() {
  return <RouterProvider router={router()} />;
}

export default App;
