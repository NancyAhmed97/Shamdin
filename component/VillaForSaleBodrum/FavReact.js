import React, { useState } from "react";

// MUI Icons
import NonLike from "@mui/icons-material/FavoriteBorder";
import Liked from "@mui/icons-material/Favorite";

function LikeReact({ react = "like", margin = 0 }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLike}
      style={{
        margin: "0 0 20px 0",
        padding: 0,
        border: "none",
        background: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
        color: "#ec94b4",
        fontWeight: "bold",
      }}
    >
      {isLiked ? <Liked /> : <NonLike />}
      <span
        style={{
          marginLeft: "5px",
          fontSize: "20px",
        }}
      >
        {react}
      </span>
    </button>
  );
}

export default LikeReact;
