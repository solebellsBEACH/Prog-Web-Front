import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  margin-top: 1vh;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  max-width: 30vw;
  min-height: 5vh;
  height: auto;
  min-width: 80px;
  background: var(--Pink2);
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  border-radius: 10px;
`;

export const PageLabel = styled.div`
  width: 50vw;
  height: 5vh;
  background: var(--Blue);
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  border-radius: 10px;
`;
