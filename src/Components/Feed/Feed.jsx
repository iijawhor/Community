import React, { useState, useEffect } from "react";
import "./Feed.css";
import Posts from "../Posts/Posts";
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
      <Posts />
    </section>
  );
};

export default Feed;
