import useAuthStore from "../pages/login/store";
import { HStack } from "@chakra-ui/react";
import { NavLink } from "react-router";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  const { user, logout } = useAuthStore();
  if (user)
    return (
      <div>
        <HStack padding="10px" spacing={30}>
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>

          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/login" onClick={() => logout()}>
            Logout
          </NavLink>

          <ColorModeSwitch />
        </HStack>
      </div>
    );
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/login">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/login">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <ColorModeSwitch />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
