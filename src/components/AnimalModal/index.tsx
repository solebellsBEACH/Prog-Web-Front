import { MenuItem, Modal, Select, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  Container,
  Content,
  ContentLeft,
  AnimalPhotoBox,
  ContentRight,
  ActionIcon,
} from "./styles";
import { MdPets } from "react-icons/md";
import { FaDog, FaCat } from "react-icons/fa";
import { GiSeatedMouse, GiHummingbird } from "react-icons/gi";
import { IoMdTrash } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";

import { api, config } from "../../utils/api/api";

interface AnimalModalProps {
  id: number;
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
  id,
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
              <ActionIcon style={{ backgroundColor: "red" }}>
                <IoMdTrash size={70} />
              </ActionIcon>

              <ActionIcon style={{ backgroundColor: "pink" }}>
                <BsPencilSquare size={65} />
              </ActionIcon>
            </ContentLeft>
            <ContentRight>
              <div id="nameBox" className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  defaultValue={name}
                />
              </div>

              <div className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Raça"
                  variant="outlined"
                  defaultValue={breed}
                />
              </div>
              <div className="textFieldStyled">
                <TextField
                  label="Idade"
                  variant="outlined"
                  defaultValue={age}
                />
              </div>
              <div className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Localização"
                  variant="outlined"
                  defaultValue={localization}
                />
              </div>
              <div className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Especie"
                  variant="outlined"
                  defaultValue={species}
                />
              </div>
              <div className="textFieldStyled">
                <Select
                  labelId="demo-s imple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Gênero do animal"
                  onChange={(e: any) => {}}
                  value={gender}
                >
                  <MenuItem value={"M"}>
                    <em>Macho</em>
                  </MenuItem>
                  <MenuItem value={"F"}>
                    <em>Fêmea</em>
                  </MenuItem>
                </Select>
              </div>
            </ContentRight>
          </Content>
        </Container>
      </Modal>
    </div>
  );
}
