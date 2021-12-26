import React from "react";
import { Container, Content, PageLabel } from "./styles";

//REPRESENTA A PROP NECESSARIA DO COMPONENTE, NESSE CASO SÓ O NOME DA PAGINA
interface IHeaderProps {
  label: string;
}

export const Header = ({ label }: IHeaderProps) => {
  return (
    <Container>
      <Content>Mel - Adocoes e cuidados</Content>
      <PageLabel>{label}</PageLabel>
    </Container>
  );
};
