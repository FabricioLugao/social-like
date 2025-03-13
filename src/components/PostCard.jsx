import LikeSession from "./LikeSession";
import userAvatar from "../assets/user.png"; // Importando o avatar do usuário
import styled from "styled-components";
import CommentSection from "./CommentSection";

export default function PostCard() {
  return (
    <PostCardContainer>
      <PostImage
        src={`https://picsum.photos/500/300?random=1`}
        alt="Imagem aleatória"
      />
      <PostContent>
        <UserInfo>
          <Avatar src={userAvatar} alt="Avatar do usuário" />
          <p>
            <strong>usuario.ads</strong>
          </p>
        </UserInfo>
        <p>Essa é uma foto incrível! O que vocês acham? 📸</p>

        <LikeSession />
      </PostContent>

      <CommentSection />
    </PostCardContainer>
  );
}

/* ---- Estilos ---- */
const PostCardContainer = styled.div`
  width: 500px;
  border: 1px solid #ddd;
  padding-bottom: 16px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const PostImage = styled.img`
  width: 500px;
  height: 300px;
  display: block;
  background-color: #cccccc;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;
