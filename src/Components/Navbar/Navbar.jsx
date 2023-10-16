import React from "react";
import "./Navbar.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="menu">
        <MenuRoundedIcon className="humberger" />
      </div>
      <div className="logo">
        <h1 className="logoTitle">Community</h1>
      </div>
      <div className="navbarSearch">
        <form action="">
          <input type="text" className="searchInput" placeholder="Search..." />
          <SearchRoundedIcon className="navbarIcon" />
        </form>
      </div>
      <div className="navbarIcons">
        <SearchRoundedIcon className="navbarIcon" />
        <NotificationsNoneRoundedIcon className="navbarIcon" />
        <ChatBubbleOutlineRoundedIcon className="navbarIcon" />
      </div>
    </section>
  );
};

export default Navbar;
