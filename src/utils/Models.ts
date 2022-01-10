export interface IInformation {
  title: string;
  id: number;
  subtitle: string;
  text: string;
  type_animal_id: number | null;
}

export interface IAnimal {
  id: number;
  name: string;
  breed: string;
  age: number;
  type_animal_id: number;
  gender: "M" | "F";
  localization: string;
}

export interface TypeAnimalIdResponse {
  id: number;
  type: string;
}
