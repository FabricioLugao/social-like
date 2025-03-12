import LikeButton from "./LikeButton";
import userAvatar from "../assets/user.png"; // Importando o avatar do usuário

export default function PostCardold() {
  return (
    <div className="post-card">
      <img
        src={`https://picsum.photos/500/300?random=${Math.floor(
          Math.random() * 1000
        )}`}
        alt="Imagem aleatória"
        className="post-image"
      />
      <div className="post-content">
        <div className="user-info">
          <img src={userAvatar} alt="Avatar do usuário" className="avatar" />
          <p>
            <strong>Usuário Aleatório</strong>
          </p>
        </div>
        <p>Essa é uma foto incrível! O que vocês acham? 📸</p>
        <LikeButton />
      </div>
    </div>
  );
}
