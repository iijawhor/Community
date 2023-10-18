import React from "react";
import "./Clubs.css";
import { clubsList } from "../../Constants/Constants";
import ClubCard from "../ClubCard/ClubCard";
const Clubs = () => {
  return (
    <section className="clubs">
      {clubsList.map(({ clubsName, clubsDescription, members, id }) => (
        <ClubCard
          key={id}
          members={members}
          clubsName={clubsName}
          clubsDescription={clubsDescription}
        />
      ))}
    </section>
  );
};

export default Clubs;
