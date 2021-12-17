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
  margin-left: 1vw;
  min-width: 30%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  h1 {
    font-size: 1rem;
    margin-right: 5px;
  }

  &:hover {
    color: var(--Purple);
  }
`;

export const BreedContainer = styled.div`
  h1 {
    font-size: 1rem;
    margin-right: 5px;
  }
`;

export const AgeContainer = styled.div`
  h1 {
    font-size: 1rem;
    margin-right: 5px;
  }
`;
