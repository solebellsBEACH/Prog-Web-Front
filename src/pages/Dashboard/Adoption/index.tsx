import { Modal, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { AnimalItem } from "../../../components/AnimalItem";
import AnimalModal from "../../../components/AnimalModal";
import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { api, config } from "../../../utils/api/api";
import { IAnimal } from "../../../utils/Models";
import { Container, Content } from "../styles";
import { ContainerGrid } from "./styles";

export const Adoption: React.FC = () => {
  //ARMAZENA O ESTADO DE BUSCA
  const [searchState, setSearchState] = useState("");
  //ESSA FUNCAO RETORNA UM MAP E UM FILTER QUE MUDA QUANDO PESQUISA UM NOME EM FORMA DE COMPONENTE
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actualAnimal, setActualAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    breed: "",
    age: 0,
    type_animal_id: 0,
    gender: "M",
    localization: "",
  });

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    const res = await api.get("/animal", config);
    setAnimals(res.data);
  };

  const AnimalsBox = Object.values(animals)
    .filter((val) => {
      if (searchState == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchState.toLowerCase())) {
        return val;
      }
    })
    .map((item) => (
      <div
        onClick={() => {
          setActualAnimal({
            id: item.id,
            name: item.name,
            breed: item.breed,
            age: item.age,
            type_animal_id: item.type_animal_id,
            gender: item.gender,
            localization: "d",
          });
          setIsOpenModal(true);
        }}
      >
        <AnimalItem
          name={item.name}
          breed={item.breed}
          age={item.age}
          type_of_animal={item.type_animal_id}
        />
      </div>
    ));

  return (
    <Container style={{}}>
      <Header label="Sistema de Ado????o" />
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
        <AnimalModal
          name={actualAnimal.name}
          breed={actualAnimal.breed}
          age={actualAnimal.age}
          gender={actualAnimal.gender}
          species={actualAnimal.type_animal_id}
          open={isOpenModal}
          setOpen={setIsOpenModal}
          localization={actualAnimal.localization}
        />
        <ContainerGrid>{AnimalsBox} </ContainerGrid>
      </Content>
    </Container>
  );
};
