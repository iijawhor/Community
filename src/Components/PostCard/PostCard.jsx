import React, { useContext, useState } from "react";
import "./PostCard.css";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { Context } from "../../ContextProvider/ContextProvider";
const PostCard = ({ name, bio, postClub, postTitle, postText, postImage }) => {
  const { likesCount, handleLikesCount } = useContext(Context);
  const [postTexts, setPostsTexts] = useState(postText || "");
  const [displayPostText, setDisplayPostText] = useState(false);
  const maxLength = 90;
  const trunacatePostText =
    postTexts.length > maxLength
      ? postTexts.slice(0, maxLength) + "..."
      : postTexts;
  return (
    <section className="postCard">
      <div className="postCardUser">
        <div className="postCardUserDetails">
          <img
            src={postImage ? postImage : null}
            alt="img"
            className="postUserImage"
          />
          <div className="postCardUserName">
            <h5 className="postUserName">{name}</h5>
            <p className="postUserBio">{bio ? bio : ""}</p>
          </div>
        </div>
        <div className="postCardUserClub">
          <p className="postUserClubName">{postClub ? postClub : null}</p>
        </div>
      </div>
      {/* <div className="postCardUser"> */}
      <div className="postDetails">
        <div className="postDetailsHead">
          <p className="postTextTitle">{postTitle ? postTitle : null}</p>
          <p className="postText">
            {displayPostText ? postTexts : trunacatePostText}
            {postTexts.length > maxLength && (
              <span
                onClick={() => setDisplayPostText(!displayPostText)}
                className="displayPostTextButton"
              >
                {displayPostText ? "See Less" : "See More"}
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="postImage">
        <img src={postImage} alt="postImg" className="postImage" />
      </div>
      <div className="postActivities">
        <div className="likesCount">
          <ChangeHistoryRoundedIcon
            className="postActivityIcon"
            onClick={handleLikesCount}
          />
          <span className="likes">{likesCount}</span>
        </div>
        <ChangeHistoryRoundedIcon
          style={{ transform: "rotate(180deg)" }}
          className="postActivityIcon"
        />
        <EqualizerRoundedIcon className="postActivityIcon" />
        <MapsUgcRoundedIcon className="postActivityIcon" />
        <ShareRoundedIcon className="postActivityIcon" />
      </div>
    </section>
  );
};

export default PostCard;
