import React from "react";
import "./ClubCard.css";
const ClubCard = ({ clubsName, clubsDescription, members }) => {
  return (
    <section className="clubCard">
      <div className="clubDetails">
        <div className="clubDetail">
          <img src="./assets/post.jpg" alt="imh" className="clubIcon" />
          <div className="clubName">
            <h2>{clubsName}</h2>
            <p>{members} members</p>
          </div>
        </div>
        <button className="clubJoinButton">Join</button>
      </div>
      <p className="clubDescription">{clubsDescription}</p>
    </section>
  );
};

export default ClubCard;
