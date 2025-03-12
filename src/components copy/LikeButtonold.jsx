import { useState } from "react";

export default function LikeButtonold() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="like-container">
      <p className="like-text">
        {likes} {likes === 1 ? "like" : "likes"}
      </p>
      <div className="button-group">
        <button onClick={() => setLikes(likes + 1)}>Curtir 👍</button>
        <button onClick={() => setLikes(likes - 1)} disabled={likes === 0}>
          Descurtir 👎
        </button>
      </div>
    </div>
  );
}
