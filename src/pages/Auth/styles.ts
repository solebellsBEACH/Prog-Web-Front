import styled from "styled-components";
import { Link } from "@mui/material";
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
    width: 30vw;
  }
`;

export const Content = styled.div`
  width: 50vw;
  min-height: 55vh;
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
  margin-bottom: 3vh;
`;

export const LinkComponent = styled.h2`
  margin: 2vh;
  color: var(--Blue1);

  font-size: 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`;
