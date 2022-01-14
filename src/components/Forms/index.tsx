import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import { Subtitle, Content, Label } from "./styles";
import { SliderStyles as Slider } from "../styles";
import { useEffect, useState } from "react";
import { TypeAnimalIdResponse } from "../../utils/Models";
import { api, config } from "../../utils/api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AnimalForm = () => {
  const [type_of_animalState, setType_of_animal] = useState(0);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: 0.5,
    description: "",
    city: "",
    gender: "M",
    type_animal_id: type_of_animalState,
  });

  const [type_animals_id, setType_animals_id] = useState<
    TypeAnimalIdResponse[]
  >([]);

  useEffect(() => {
    getTypeAnimalId();
  }, []);
  const getTypeAnimalId = async () => {
    const response = await api.get("/typeanimal", config);
    setType_animals_id(response.data);
  };

  const MenuItensContainer = type_animals_id.map((item, index) => (
    <MenuItem value={item.id}>
      <em>{item.type} </em>
    </MenuItem>
  ));
  const handleRegisterButton = () => {
    if (
      form.name != "" &&
      form.breed != "" &&
      form.description != "" &&
      form.city != "" &&
      form.type_animal_id != 0
    ) {
      api
        .post("/animal", form, config)
        .then((response) => {
          console.log(response);
          Swal.fire("Animal criado com sucesso!", "", "success");
          navigate("/dashboard");
        })
        .catch((e) => {
          console.log(e);
          Swal.fire(
            "Erro ao criar animal!",
            "Tente novamente mais tarde!",
            "error"
          );
        });
    } else {
      Swal.fire("Erro ao criar animal!", "Não envie campos vazios!", "error");
    }
  };
  return (
    <>
      <Subtitle>Preencha os dados para cadastrar um novo animal</Subtitle>
      <Content>
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          onChange={(e: any) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Especie
          </InputLabel>
          <Select
            labelId="demo-s imple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e: any) => {
              setForm({ ...form, type_animal_id: e.target.value });
            }}
          >
            {MenuItensContainer}
          </Select>
        </FormControl>
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Raça"
          variant="outlined"
          onChange={(e: any) => {
            setForm({ ...form, breed: e.target.value });
          }}
        />
        <Label>Selecione a idade do animal</Label>
        <Slider
          color="secondary"
          aria-label="Temperature"
          defaultValue={0.5}
          valueLabelDisplay="auto"
          style={{ width: "65%" }}
          step={0.5}
          marks
          min={0.5}
          onChange={(e: any) => {
            setForm({ ...form, age: e.target.value });
          }}
          max={15}
        />
        <TextField
          rows={4}
          multiline
          className="text-field"
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          onChange={(e: any) => {
            setForm({ ...form, description: e.target.value });
          }}
        />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gênero</InputLabel>
          <Select
            labelId="demo-s imple-select-helper-label"
            id="demo-simple-select-helper"
            label="Gênero do animal"
            onChange={(e: any) => {
              setForm({ ...form, gender: e.target.value });
            }}
          >
            <MenuItem value={"M"}>
              <em>Macho</em>
            </MenuItem>
            <MenuItem value={"F"}>
              <em>Fêmea</em>
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          className="text-field"
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          onChange={(e: any) => {
            setForm({ ...form, city: e.target.value });
          }}
        />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Button
            onClick={() => {
              navigate("/adoption");
            }}
            color="secondary"
            variant="contained"
            style={{ marginRight: "20px" }}
          >
            Consultar
          </Button>
          <Button
            onClick={handleRegisterButton}
            color="secondary"
            variant="contained"
          >
            Cadastrar
          </Button>
        </div>
      </Content>
    </>
  );
};
