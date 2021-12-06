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
  width: 50vw;
  min-height: 50vh;
  height: auto;
  background: var(--White);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  /* justify-content: center; */
  align-items: center;
`;

export const Subtitle = styled.div`
  font-size: 3rem;
  margin-top: 15px;
  font-weight: 500;
  background: none;
  color: var(--Blue1);
`;
