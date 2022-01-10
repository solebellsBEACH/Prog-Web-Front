import styled from "styled-components";

export const Container = styled.div`
  height: 62vh;
  width: 38vw;
  background: var(--Background);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  height: 55vh;
  width: 35vw;
  background: white;
  border-radius: 10px;
  display: flex;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: top;
`;
export const AnimalPhotoBox = styled.div`
  height: 120px;
  width: 120px;
  background: var(--Pink1);
  border-radius: 10px;
  margin: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentRight = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 1.5vh;
  border: 2px solid var(--Purple);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const Subtitle = styled.h1`
  font-size: 2.5rem;
  margin: 1vw;
  text-transform: uppercase;
`;
export const TextField = styled.h1`
  font-size: 1.5rem;
  margin: 1vw;
`;
