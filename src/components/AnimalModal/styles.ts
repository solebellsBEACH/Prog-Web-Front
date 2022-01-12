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
  align-items: center;
  flex-direction: column;
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

  .textFieldStyled {
    margin: 1vh 0 1vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #nameBox {
    margin: 2vh 0 1vh 0;
  }
`;

export const ActionIcon = styled.div`
  background: black;
  height: 90px;
  width: 90px;
  margin-top: 3vh;
  border-radius: 50%;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;
