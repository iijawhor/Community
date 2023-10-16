import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import NavbarNavigation from "../NavbarNavigation/NavbarNavigation";
const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <NavbarNavigation />
    </section>
  );
};

export default Header;
