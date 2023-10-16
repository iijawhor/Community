import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Feed from "../Feed/Feed";
const Home = () => {
  return (
    <section className="home">
      <Header />
      <Feed />
    </section>
  );
};

export default Home;
