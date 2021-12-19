import React from "react";

const Like = ({ liked, onClick }) => {
  return (
    <i
      onClick={onClick}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
      aria-hidden
    ></i>
  );
};

export default Like;
