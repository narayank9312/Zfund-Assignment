import Image from "next/image";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavbarMobile from "./navbar-mob";
import NavbarDesktop from "./navbar-desk";
function NavbarAction() {
  return <div>NavbarAction</div>;
}

function Navbar() {
  const isMobile = useMediaQuery();
  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
}

export default Navbar;
