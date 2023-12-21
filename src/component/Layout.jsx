import { Outlet } from "react-router-dom"
export const Layout = () => {
  return (
    <>
      <div>NavBar</div>
      <Outlet/>
      <div>Footer</div>
    </>
  )
}
