import {
  Container,
  Content,
  NameContainer,
  BreedContainer,
  AgeContainer,
} from "./styles";
import { MdPets } from "react-icons/md";
import { FaDog, FaCat } from "react-icons/fa";
import { GiSeatedMouse, GiHummingbird } from "react-icons/gi";
import { AnimalLogo } from "../styles";
//REPRESENTA AS PROPS NECESSARIOS PARA O ELEMENTO
interface IAnimalItemProps {
  name: string;
  breed: string;
  age: number;
  type_of_animal: number;
}
//ESSE COMPONENTE É RESPONSAVEL POR REPRESENTAR O ANIMAL NA LISTA
export const AnimalItem = ({
  age,
  breed,
  name,
  type_of_animal,
}: IAnimalItemProps) => {
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
      <AnimalLogo>{icon}</AnimalLogo>
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
