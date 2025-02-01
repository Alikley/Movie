import { Button } from "@chakra-ui/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { NavLink } from "react-router-dom";
function NavbarMovie() {
  return (
    <div>
      <Navbar className="fixed p-10 left-0 top-0 w-full z-50 duration-500 ease-out bg-gradient-to-b from-black/70 to-transparent">
        <NavbarBrand>
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <p className="font-bold lg:text-3xl md:text-xl font-bold text-gray-300 ">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4  md:flex space-x-10 lg:text-3xl md:text-xl font-bold text-gray-300" justify="center">
          <NavbarItem>
            <NavLink color="foreground" to="#">
              Features
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink aria-current="page" to="#">
              Customers
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink color="foreground" to="#">
              Integrations
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="lg:text-3xl md:text-xl font-bold text-gray-300">
          <NavbarItem className="hidden lg:flex">
            <NavLink to="#">Login</NavLink>
          </NavbarItem>
          <NavbarItem>
            <Button as={NavLink} color="primary" to="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default NavbarMovie;
