import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  margin: 1vh 3vw 1vh 3vw;
  min-height: 13vh;
  height: auto;
  background-color: var(--Pink1);
  border-radius: 5px;
`;

export const AnimalLogoContainer = styled.div`
  background-color: white;
  width: 70px;
  height: 70px;
  display: flex;
  margin: 1.5vw;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  margin: 1vh 1vw 1vh 1vw;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--Purple);
`;

export const Subtitle = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 1vw;
`;

export const ContentText = styled.h2`
  margin-left: 1vw;
  font-size: 0.9rem;
  margin: 0.7vh;
`;
