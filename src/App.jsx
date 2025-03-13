import styled from "styled-components";
import "./App.css";
import PostCard from "./components/PostCard";

export default function App() {
  return (
    <AppContainer>
      <PostCard />
    </AppContainer>
  );
}

/* ---- Estilos ---- */
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
