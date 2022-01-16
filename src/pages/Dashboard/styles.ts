import styled from "styled-components";
export const Container = styled.div`
  background: var(--Background);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .formik-form {
    display: flex;
    flex-direction: row;
  }

  .text-field {
    margin: 1vh 0 1vh 0;
    width: 70%;
  }
`;

export const Content = styled.div`
  margin-top: 3vh;
  border-radius: 20px;
  margin-bottom: 3vh;
  height: auto;
  min-height: 94vh;
  width: 94vw;
  background-color: white;
  display: flex;
  flex-direction: column;

  #setting-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    margin-top: 1vh;
    margin-left: 2vw;
    margin-bottom: 2vh;
  }
`;

export const Subtitle = styled.div`
  font-size: 3rem;
  margin-top: 15px;
  font-weight: 500;
  background: none;
  color: var(--Blue1);
  margin-bottom: 3vh;
`;

export const ContainerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
`;
