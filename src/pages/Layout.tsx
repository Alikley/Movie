
import Footer from "@/components/Footer";
import Navbar from "../components/NavbarMovie";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
