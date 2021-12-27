import styled from "styled-components";

export const ContainerTaskBox = styled.div`
  height: 100px;
  width: 200px;
  margin: 0 1vw 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerIconBox = styled.div`
  height: 70px;
  width: 70px;
  color: white;
  background-color: var(--Blue);
  border-radius: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelBox = styled.div`
  width: 100%;
  margin-top: 1px;
  height: 45px;
  margin-bottom: 0.5vh;
  background-color: var(--White);
  text-transform: uppercase;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  p:hover {
    color: var(--Purple);
  }
`;
