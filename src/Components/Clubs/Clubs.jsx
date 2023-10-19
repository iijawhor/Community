import React from "react";
import "./Clubs.css";
import { clubList } from "../../Constants/Constants";
import ClubCard from "../ClubCard/ClubCard";
const Clubs = () => {
  return (
    <section className="club">
      {clubList.map(({ clubName, clubsDescription, members, id }) => (
        <ClubCard
          key={id}
          members={members}
          clubsName={clubName}
          clubsDescription={clubsDescription}
        />
      ))}
    </section>
  );
};

export default Clubs;
