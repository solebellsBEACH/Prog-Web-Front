import { TextField } from "@material-ui/core";
import { useState } from "react";
import { AnimalItem } from "../../../components/AnimalItem";
import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { fakeApiAnimals } from "../../../utils/fakeAPi";
import { Container, Content } from "../styles";
import { ContainerGrid } from "./styles";

export const Adoption: React.FC = () => {
  const [searchState, setSearchState] = useState("");

  const AnimalsBox = fakeApiAnimals.animals
    .filter((val) => {
      console.log(val);
      if (searchState == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchState.toLowerCase())) {
        return val;
      }
    })
    .map((item) => (
      <AnimalItem
        name={item.name}
        breed={item.breed}
        age={item.age}
        type_of_animal={item.type_of_animal}
      />
    ));
  return (
    <Container style={{}}>
      <Header label="Sistema de Adoção" />
      <Content>
        <div id="setting-box">
          <TextField
            id="outlined-basic"
            label="Pesquise o nome"
            variant="outlined"
            onChange={(e) => {
              setSearchState(e.target.value);
            }}
          />
          <SettingBox />
        </div>

        <ContainerGrid>{AnimalsBox} </ContainerGrid>
      </Content>
    </Container>
  );
};
