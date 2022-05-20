import React, { useState } from "react";

// MUI Icons
import NonLike from "@mui/icons-material/FavoriteBorder";
import Liked from "@mui/icons-material/Favorite";

function LikeReact({ react = "like", margin = 0 }) {
  let [count, setCount] = useState(1000);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCount(!isLiked ? count + 1 : count - 1);
  };

  return (
    <button
      onClick={handleLike}
      style={{
        margin,
        padding: 0,
        border: "none",
        background: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "75px",
        color: "#5f6670",
      }}
    >
      {isLiked ? <Liked /> : <NonLike />}
      <span
        style={{
          marginLeft: "10px",
        }}
      >
        {count}
      </span>
      <span
        style={{
          marginLeft: "5px",
        }}
      >
        {react}
      </span>
    </button>
  );
}

export default LikeReact;
