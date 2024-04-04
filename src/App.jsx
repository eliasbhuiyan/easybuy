import { Layout } from "./component/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
import { useSelector } from "react-redux";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
const Router = () => {
  const user = useSelector((state) => state.user_sec.user);
  console.log(user);
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Shop />} />
        <Route path="/productdetails/:slug" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={!user ? <Navigate to="/" replace /> : <Account />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp/:userId" element={<OtpPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/*" element={<Error />} />
      </Route>
    )
  );
};
function App() {
  return <RouterProvider router={Router()} />;
}

export default App;
