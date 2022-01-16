import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { apiLocalization } from "../../utils/api/api";
import { Container } from "./styles";

interface CitySelectProps {
  form: {
    name: string;
    breed: string;
    age: number;
    description: string;
    city_loc: string;
    gender: string;
    type_animal_id: number;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      breed: string;
      age: number;
      description: string;
      city_loc: string;
      gender: string;
      type_animal_id: number;
    }>
  >;
}

export const CitySelect = ({ form, setForm }: CitySelectProps) => {
  const [apiUf, setApiUf] = useState<
    {
      id: number;
      sigla: string;
      nome: string;
    }[]
  >([]);
  const [apiCity, setApiCity] = useState<
    {
      id: string;
      nome: string;
    }[]
  >([]);

  const [actualUf, setActualUf] = useState("");
  const [actualCity, setActualCity] = useState("");

  function setCity(city: string, state: string) {
    if (city != "" && city != undefined && state != "" && state != undefined) {
      setForm({ ...form, city_loc: city + ", " + state + ", Brasil" });
    }
    console.log(form);
  }

  useEffect(() => {
    getUfs();
  }, []);
  useEffect(() => {
    getCitys();
  }, [actualUf]);

  const getUfs = async () => {
    const res = await apiLocalization.get("localidades/estados");
    setApiUf(res.data);
  };

  const getCitys = async () => {
    const res = await apiLocalization.get(
      `localidades/estados/${actualUf}/municipios`
    );
    setApiCity(res.data);
  };

  return (
    <div style={{ display: "flex" }}>
      <Container sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={actualUf}
          label="Estado"
          onChange={(e: any) => {
            setActualUf(e.target.value);
          }}
        >
          {apiUf.map((item) => (
            <MenuItem value={item.sigla}>{item.nome}</MenuItem>
          ))}
        </Select>
      </Container>
      <Container sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Cidade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={actualCity}
          label="Estado"
          onChange={(e: any) => {
            setActualCity(e.target.value);
            setCity(actualCity, actualUf);
          }}
        >
          {apiCity.map((item) => (
            <MenuItem value={item.nome}>{item.nome}</MenuItem>
          ))}
        </Select>
      </Container>
    </div>
  );
};
