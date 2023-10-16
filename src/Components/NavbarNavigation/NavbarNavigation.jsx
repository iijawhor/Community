import React, { useContext } from "react";
import "./NavbarNavigation.css";
import { Context } from "../../ContextProvider/ContextProvider";
const NavbarNavigation = () => {
  const { links, activeLink, handleActiveNavbar } = useContext(Context);
  return (
    <section className="navbarNavigation">
      {links.map(({ label, id, route }) => (
        <div
          className={`navbarNavigationItem ${
            id === activeLink ? "active" : ""
          }`}
          key={id}
          onClick={() => handleActiveNavbar(id)}
        >
          <h3>{label}</h3>
        </div>
      ))}
    </section>
  );
};

export default NavbarNavigation;
