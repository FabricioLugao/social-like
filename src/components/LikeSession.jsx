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
  background-color: #0084ff;
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
  background-color: #ff4d4d;
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

  &[disabled] {
    background-color: #ccc;
    color: #888;
  }
`;

const LikeText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  font-weight: bold;
`;

export default function LikeSession() {
  console.log("LikeSession renderizou!");
  const [likes, setLikes] = useState(12);
  // NÃO FUNCIONA!
  //let likes = 0;
  //likes = likes + 1;

  const LikeClick = () => {
    setLikes(likes + 1);
  };

  const DislikeClick = () => {
    setLikes(likes - 1);
  };

  return (
    <LikeContainer>
      <LikeText>{likes} curtida(s)</LikeText>
      <ButtonContainer>
        <LikeButton onClick={LikeClick}>👍 Curtir</LikeButton>
        <DislikeButton onClick={DislikeClick} disabled={likes === 0}>
          👎 Descurtir
        </DislikeButton>
      </ButtonContainer>
    </LikeContainer>
  );
}
