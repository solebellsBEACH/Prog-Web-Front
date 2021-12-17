import {
  Container,
  AnimalLogo,
  Content,
  NameContainer,
  BreedContainer,
  AgeContainer,
} from "./styles";
import { MdPets } from "react-icons/md";

interface AnimalItemProps {
  name: string;
  breed: string;
  age: number;
}

export const AnimalItem = ({ age, breed, name }: AnimalItemProps) => {
  return (
    <Container>
      <AnimalLogo>
        <MdPets size={50} />
      </AnimalLogo>
      <Content>
        <NameContainer>
          <h1>Name: </h1>
          {name}
        </NameContainer>
        <BreedContainer>
          <h1>Breed: </h1>
          {breed}
        </BreedContainer>
        <AgeContainer>
          <h1>Age: </h1>
          {age} anos
        </AgeContainer>
      </Content>
    </Container>
  );
};
