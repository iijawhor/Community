import React from "react";
import "./MyClubCard.css";
const MyClubCard = () => {
  return (
    <section className="myClubCard">
      <div className="clubDetails">
        <div className="clubDetail">
          <img src="./assets/post.jpg" alt="imh" className="clubIcon" />
          <div className="clubName">
            <h2>Tech Club</h2>
            <p>2113 members</p>
          </div>
        </div>
        <button className="clubJoinButton">Join</button>
      </div>
      <p className="clubDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
        elit...
      </p>
    </section>
  );
};

export default MyClubCard;
