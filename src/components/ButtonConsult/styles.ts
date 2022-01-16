import { Button, Paper } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Button)`
  height: 35px;

  margin-right: 1vh;
`;

export const ContainerModal = styled(Paper)`
  height: 800px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridUsers = styled.div`
  height: 800px;
  overflow: auto;
  width: 700px;
  display: flex;
  flex-direction: column;
  background: #dcdcdc;
`;
