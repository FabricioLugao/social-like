import React from "react";
import styled from "styled-components";
import userAvatar from "../assets/user.png"; // Imagem fixa do avatar do usuário

// Styled Components
const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd; /* Separador entre os comentários */
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const CommentContent = styled.div`
  flex-grow: 1;
`;

const UserName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 14px;
  color: #333;
`;

const CommentText = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #333;
`;

const Divider = styled.hr`
  margin: 10px 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const Comment = ({ text, index }) => {
  return (
    <CommentContainer>
      <Avatar src={userAvatar} alt="Avatar do usuário" />
      <CommentContent>
        <UserName>user{index}</UserName>
        <CommentText>{text}</CommentText>
      </CommentContent>
    </CommentContainer>
  );
};

export default Comment;
