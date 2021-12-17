import styled from "styled-components";

export const Container = styled.div`
  min-height: 11vh;
  min-width: 300px;
  width: auto;
  max-width: 500px;
  border: 2px solid var(--Purple);
  border-radius: 10px;
  margin: 1vh 1vw 1vh 2vw;
  display: flex;
  align-items: center;
`;

export const AnimalLogo = styled.div`
  background-color: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

export const Content = styled.div`
  height: 80%;
  min-width: 30%;
  background-color: green;
  width: auto;
`;
