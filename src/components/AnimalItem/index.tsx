import React from "react";
import { Container, AnimalLogo, Content } from "./styles";
import { MdPets } from "react-icons/md";

export const AnimalItem = () => {
  return (
    <Container>
      <AnimalLogo>
        <MdPets size={50} />
      </AnimalLogo>
      <Content></Content>
    </Container>
  );
};
