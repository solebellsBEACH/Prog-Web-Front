import { MenuItem, Modal, Select, Slider, TextField } from "@material-ui/core";
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
import Swal from "sweetalert2";
import { Label } from "../Forms/styles";

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
  getAnimals: () => Promise<void>;
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
  getAnimals,
}: AnimalModalProps) {
  const [typeAnimals, setTypeAnimals] = useState<
    { id: number; type: string }[]
  >([]);

  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: 0.5,
    description: "",
    city: "",
    gender: "M",
    type_animal_id: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setForm({
      ...form,
      name: name,
      breed: breed,
      age: age,
      city: localization,
      gender: gender,
      type_animal_id: species,
    });
  }, [name]);

  useEffect(() => {
    getTypeAnimals();
  }, []);

  const getTypeAnimals = async () => {
    const res = await api.get("/typeanimal", config);
    setTypeAnimals(res.data);
  };

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

  const callBackEditAnimal = () => {
    api
      .put(`animal/${id}`, form, config)
      .then(() => {
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Okay !",
          text: "Animal editado com sucesso!",
        });
        getAnimals();
      })
      .catch(() => {
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, por favor tente novamente...",
        });
      });
  };

  const callBackDeleteAnimal = () => {
    api
      .delete(`animal/${id}`, config)
      .then(() => {
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Okay !",
          text: "Animal deletado com sucesso!",
        });
        getAnimals();
      })
      .catch(() => {
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado, por favor tente novamente...",
        });
      });
  };

  return (
    <div>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "100px",
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
              <ActionIcon
                onClick={callBackDeleteAnimal}
                style={{ backgroundColor: "red" }}
              >
                <IoMdTrash size={70} />
              </ActionIcon>

              <ActionIcon
                onClick={callBackEditAnimal}
                style={{ backgroundColor: "pink" }}
              >
                <BsPencilSquare size={65} />
              </ActionIcon>
            </ContentLeft>
            <ContentRight>
              <div id="nameBox" className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  onChange={(e: any) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                  defaultValue={name}
                />
              </div>

              <div className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Raça"
                  variant="outlined"
                  onChange={(e: any) => {
                    setForm({ ...form, breed: e.target.value });
                  }}
                  defaultValue={breed}
                />
              </div>

              <div id="age" className="textFieldStyled">
                <Label>Selecione a idade do animal</Label>
                <Slider
                  color="secondary"
                  aria-label="Temperature"
                  defaultValue={age}
                  valueLabelDisplay="auto"
                  style={{ width: "85%" }}
                  step={0.5}
                  marks
                  min={0.5}
                  onChange={(e: any) => {
                    setForm({ ...form, age: e.target.value });
                  }}
                  max={15}
                />
              </div>
              <div className="textFieldStyled">
                <TextField
                  id="outlined-basic"
                  label="Localização"
                  variant="outlined"
                  onChange={(e: any) => {
                    setForm({ ...form, city: e.target.value });
                  }}
                  defaultValue={localization}
                />
              </div>
              <div className="textFieldStyled">
                <Select
                  labelId="demo-s imple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Gênero do animal"
                  onChange={(e: any) => {
                    setForm({ ...form, gender: e.target.value });
                  }}
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
