import React from "react";

import {
  Container,
  Content,
  Subtitle,
  ContentText,
  AnimalLogoContainer,
} from "./styles";
import { MdPets } from "react-icons/md";
import { FaDog, FaCat } from "react-icons/fa";
import { GiSeatedMouse, GiHummingbird } from "react-icons/gi";

interface IInformationItemProps {
  type_of_animal: number;
  subtitle: string;
  contentText: string;
}

export const InformationItem = ({
  type_of_animal,
  subtitle,
  contentText,
}: IInformationItemProps) => {
  let icon = <MdPets size={45} />;
  switch (type_of_animal) {
    case 1:
      icon = <FaDog size={45} />;
      break;

    case 2:
      icon = <FaCat size={45} />;
      break;
    case 3:
      icon = <GiSeatedMouse size={45} />;
      break;
    case 4:
      icon = <GiHummingbird size={45} />;
      break;
  }
  return (
    <Container>
      <AnimalLogoContainer>{icon} </AnimalLogoContainer>
      <Content>
        <Subtitle>{subtitle} </Subtitle>
        <ContentText>{contentText}</ContentText>
      </Content>
    </Container>
  );
};
