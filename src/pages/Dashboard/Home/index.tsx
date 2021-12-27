import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { Header } from "../../../components/Header";
import { InformationItem } from "../../../components/InformationItem";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { fakeApiInfos, fakeApiTypeOfAnimals } from "../../../utils/fakeAPi";
import { Container, Content } from "../styles";

interface SelectAnimalProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const SelectAnimal = ({ setState }: SelectAnimalProps) => {
  const MenuItensContainer = fakeApiTypeOfAnimals.types.map((item) => (
    <MenuItem value={item.id}>
      <em>{item.name} </em>
    </MenuItem>
  ));

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Especie</InputLabel>
      <Select
        labelId="demo-s imple-select-helper-label"
        id="demo-simple-select-helper"
        label="Especie do animal"
        onChange={(e: any) => {
          setState(e.target.value);
        }}
      >
        <MenuItem value={0}>
          <em>Todos</em>
        </MenuItem>
        {MenuItensContainer}
      </Select>
    </FormControl>
  );
};

//ESSA FUNCAO RETORNA A PAGINA HOME DO DASHBOARD
export const Home: React.FC = () => {
  const [animalInformationId, setAnimalInformationId] = useState(0);

  const InformationsContainer = fakeApiInfos.infos
    .filter((val) => {
      if (animalInformationId == 0) {
        return val;
      } else if (animalInformationId == val.type_of_animal) {
        return val;
      }
    })
    .map((item) => (
      <InformationItem
        type_of_animal={item.type_of_animal}
        subtitle={item.subTitle}
        contentText={item.contentText}
      />
    ));

  return (
    <Container>
      <Header label="Home" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <SelectAnimal setState={setAnimalInformationId} />
          <SettingBox />
        </div>
        {InformationsContainer}
      </Content>
    </Container>
  );
};
