import { Layout } from "./component/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = ()=>{
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );
}
function App() {
  return (
    <RouterProvider router={router()} />
  )
}

export default App
