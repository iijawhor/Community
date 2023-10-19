import React, { useState, useEffect } from "react";
import "./Feed.css";
import Posts from "../Posts/Posts";
import Clubs from "../Clubs/Clubs";
import MyClubs from "../MyClubs/MyClubs";
const Feed = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
    }
  }, []);

  return (
    <section className="feed" style={{ paddingTop: `${headerHeight}px` }}>
      <Clubs />
      <Posts />
      <MyClubs />
    </section>
  );
};

export default Feed;
