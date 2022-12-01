import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/pylumber.svg";

const Header = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className=" d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;
