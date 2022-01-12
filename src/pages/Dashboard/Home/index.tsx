import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { InformationItem } from "../../../components/InformationItem";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { api, config } from "../../../utils/api/api";
import { IInformation } from "../../../utils/Models";
import { Container, Content } from "../styles";

interface SelectAnimalProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const SelectAnimal = ({ setState }: SelectAnimalProps) => {
  const [typeAnimals, setTypeAnimals] = useState<
    { id: number; type: string }[]
  >([]);

  useEffect(() => {
    getTypeAnimals();
  }, []);

  const getTypeAnimals = async () => {
    const res = await api.get("/typeanimal", config);
    setTypeAnimals(res.data);
  };

  const MenuItensContainer = typeAnimals.map((item) => (
    <MenuItem value={item.id}>
      <em>{item.type} </em>
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
  const [informations, setInformations] = useState<IInformation[]>([]);
  useEffect(() => {
    getInformations();
  }, []);

  const getInformations = async () => {
    const response = await api.get("/information", config);
    setInformations(response.data);
  };
  const renderInformations = (animalInformationId: number | null) => {
    return informations
      .filter((val) => {
        if (animalInformationId == 0) {
          return val;
        } else if (animalInformationId == val.type_animal_id) {
          return val;
        }
      })
      .map((item) => (
        <InformationItem
          type_of_animal={item.type_animal_id}
          subtitle={item.title}
          contentText={item.text}
        />
      ));
  };

  return (
    <Container>
      <Header label="Home" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <SelectAnimal setState={setAnimalInformationId} />
          <SettingBox />
        </div>
        {renderInformations(animalInformationId)}
      </Content>
    </Container>
  );
};
