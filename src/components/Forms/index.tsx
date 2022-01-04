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
import { fakeApiTypeOfAnimals } from "../../utils/fakeAPi";
import { useState } from "react";

interface SelectAnimalProps {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}
const SelectAnimal = ({ setState, state }: SelectAnimalProps) => {
  const MenuItensContainer = fakeApiTypeOfAnimals.types.map((item, index) => (
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
        {MenuItensContainer}
      </Select>
    </FormControl>
  );
};

export const AnimalForm = () => {
  const [type_of_animalState, setType_of_animal] = useState(0);
  console.log();
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: 0,
    description: "",
    city: "",
    type_of_animal: type_of_animalState,
  });

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
        <SelectAnimal
          setState={setType_of_animal}
          state={type_of_animalState}
        />
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
        <TextField
          className="text-field"
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          onChange={(e: any) => {
            setForm({ ...form, city: e.target.value });
          }}
        />
        <Button
          onClick={() => {
            console.log(form);
          }}
          color="secondary"
          variant="contained"
        >
          Cadastrar
        </Button>
      </Content>
    </>
  );
};
