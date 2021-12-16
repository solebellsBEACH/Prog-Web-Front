import React from "react";
import { Container, Content, PageLabel } from "./styles";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <Container>
      <Content>Mel - Adocoes e cuidados</Content>
      <PageLabel>{label}</PageLabel>
    </Container>
  );
};
