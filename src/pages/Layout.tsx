
import Navbar from "../components/NavbarMovie";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
