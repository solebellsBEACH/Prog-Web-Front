import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const Subtitle = styled.h2`
  font-size: 1.3rem;
`;
export const Label = styled(Typography)`
  color: #696969;
`;

export const Content = styled.div`
  width: 80vw;
  height: auto;
  min-height: 3vh;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  .text-field {
    margin: 1.5vh 0 1.5vh 0;
    width: 70%;
  }
`;
