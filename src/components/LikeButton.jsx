// LikeButton.jsx
import React, { useState } from "react";
import styled from "styled-components";

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const LikeButton = styled.button`
  background-color: #005bb5;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;

  &:active {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const DislikeButton = styled.button`
  background-color: #b50000;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out;

  &:active {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const LikeText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  font-weight: bold;
`;

export default function LikeButtonComponent() {
  const [likes, setLikes] = useState(0);

  const LikeClick = () => {
    setLikes(likes + 1);
  };

  const DislikeClick = () => {
    setLikes(likes - 1);
  };

  return (
    <LikeContainer>
      <LikeText>
        {likes} {likes === 1 ? "like" : "likes"}
      </LikeText>
      <ButtonContainer>
        <LikeButton onClick={LikeClick}>👍 Curtir</LikeButton>
        <DislikeButton onClick={DislikeClick} disabled={likes === 0}>
          👎 Descurtir
        </DislikeButton>
      </ButtonContainer>
    </LikeContainer>
  );
}
