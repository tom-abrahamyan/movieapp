import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"


const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 w-[100%] flex flex-col items-center ">
         <ScrollToTop/>
         <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default Layout