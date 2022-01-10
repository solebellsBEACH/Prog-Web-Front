import { Button, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import { AnimalLogo } from "../styles";
import {
  Container,
  Content,
  ContentLeft,
  AnimalPhotoBox,
  ContentRight,
  Subtitle,
  TextField,
} from "./styles";
import { MdPets } from "react-icons/md";
import { FaDog, FaCat } from "react-icons/fa";
import { GiSeatedMouse, GiHummingbird } from "react-icons/gi";
import { api, config } from "../../utils/api/api";

interface AnimalModalProps {
  name: string;
  breed: string;
  age: number;
  localization: string;
  species: number;
  gender: "M" | "F";
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AnimalModal({
  name,
  age,
  species,
  breed,
  gender,
  open,
  setOpen,
  localization,
}: AnimalModalProps) {
  const [typeAnimals, setTypeAnimals] = useState<
    { id: number; type: string }[]
  >([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getTypeAnimals();
  }, []);

  const getTypeAnimals = async () => {
    const res = await api.get("/typeanimal", config);
    setTypeAnimals(res.data);
  };

  const type_of_animal: number = 2;
  let icon = <MdPets size={95} />;
  switch (species) {
    case 1:
      icon = <FaDog size={95} />;
      break;

    case 2:
      icon = <FaCat size={95} />;
      break;
    case 3:
      icon = <GiSeatedMouse size={95} />;
      break;
    case 4:
      icon = <GiHummingbird size={95} />;
      break;
  }
  return (
    <div>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Container>
          <Content>
            <ContentLeft>
              <AnimalPhotoBox>{icon}</AnimalPhotoBox>
            </ContentLeft>
            <ContentRight>
              <Subtitle>{name}</Subtitle>
              <TextField>Raça: {breed} </TextField>
              <TextField>Idade: {age} anos</TextField>
              <TextField>Localização: {localization}</TextField>
              <TextField>Especie: {species}l</TextField>
              <TextField>
                Gênero:
                {() => {
                  if (gender == "M") {
                    return "Macho";
                  }
                  return "Femea";
                }}
              </TextField>
            </ContentRight>
          </Content>
        </Container>
      </Modal>
    </div>
  );
}
