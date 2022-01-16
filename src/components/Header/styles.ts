import styled from "styled-components";

export const Container = styled.div`
  min-width: 50vw;
  width: auto;
  margin-top: 1vh;
  min-height: 10vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  min-width: 30vw;
  width: auto;
  margin-bottom: 1vh;
font-size:1vw
  min-height: 5vh;
  height: auto;
  min-width: 80px;
  background: var(--Pink2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  padding:10px;
  border-radius: 10px;
`;

export const PageLabel = styled.div`
  min-width: 50vw;
  width: auto;
  min-height: 5vh;
  height: auto;
  background: var(--Blue);
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  border-radius: 10px;
`;
