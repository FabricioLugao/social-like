import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";

export default function CommentSection() {
  const [comments, setComments] = useState([
    "Ótima foto! 😍",
    "Incrível! Que lugar é esse?",
    "Adorei essa perspectiva! 📸",
  ]);

  const [newComment, setNewComment] = useState("");

  const commentChange = (e) => {
    console.log(e.target.value);
    setNewComment(e.target.value);
  };

  const clickSubmitComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const deleteComment = (index) => {
    const novosComentarios = [...comments];
    novosComentarios.splice(index, 1);
    setComments(novosComentarios);
  };

  return (
    <CommentSectionContainer>
      <h3>Comentários</h3>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <Comment text={comment} index={index} />
            <DeleteButton onClick={() => deleteComment(index)}>x</DeleteButton>
          </CommentItem>
        ))}
      </CommentList>

      {/* 
      Senão utilizarmos o "onChange" o React não irá saber que o valor do input mudou;
      Senão utilizarmos o "value" o React não irá saber qual é o valor atual do input;
      Sempre que o usuário interage com a aplicação, precisamos avisar ao React,
        assim como foi feito no "LikeSession.jsx" com o "useState" e "onClick".
      */}
      {/* <CommentInput type="text" placeholder="Adicione um comentário..." /> */}

      <CommentInput
        type="text"
        value={newComment}
        onChange={commentChange}
        placeholder="Adicione um comentário..."
      />
      <SubmitButton onClick={clickSubmitComment}>Enviar</SubmitButton>
    </CommentSectionContainer>
  );
}

/* ---- Estilos ---- */
const CommentSectionContainer = styled.div`
  padding: 0px 12px;
  border-top: 1px solid #ddd;
`;

const CommentList = styled.div`
  margin-bottom: 10px;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: #005bb5;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:active {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const CommentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-top: 1px solid #ddd;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: darkred;
  }
`;
