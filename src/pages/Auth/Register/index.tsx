import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { ButtonConsult } from "../../../components/ButtonConsult";
import { api } from "../../../utils/api/api";
import { Container, Content, LinkComponent, Subtitle } from "../styles";
// AQUI TEMOS A FUNCAO QUE GERA A PAGINA DE REGISTRO
export const Register = () => {
  //ARMAZENA O ESTADO DE NOME, EMAIL E PASSWORD
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //FUNCAO DE QUANDO CLICAMOS NO BOTAO DE LOG IN
  const handleLogIn = () => {
    if (email != "" && password != "" && name != "") {
      api
        .post("user", {
          email: email,
          password: password,
          username: name,
          type_user_id: 1,
        })
        .then((req) => {
          Swal.fire("Usuário criado com sucesso!", "", "success");
          navigate("/");
        })
        .catch((e) => {
          Swal.fire(
            "Erro ao criar usuário!",
            "Por favor, tente novamente!",
            "error"
          );
          console.log(e);
        });
    } else {
      Swal.fire("Erro ao criar usuário!", "Não envie campos vazios!", "error");
    }
  };

  const handleRedirectRegister = () => {
    navigate("/");
  };

  return (
    <Container>
      <Content>
        <Subtitle>Register</Subtitle>
        <TextField
          id="outlined-basic"
          className="text-field"
          label="Email"
          name="email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          className="text-field"
          label="Nome"
          name="name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Tipo de Usuário</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Tipo de Usuário"
            className="text-field"
            onChange={() => {}}
          >
            <MenuItem value={1}>Doador</MenuItem>
            <MenuItem value={2}>Donatário</MenuItem>
            <MenuItem value={0}>Ambos</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          className="text-field"
          label="Senha"
          name="password"
          type="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
        >
          <ButtonConsult />
          <Button
            style={{ backgroundColor: "#4B0082", marginLeft: "2vh" }}
            variant="contained"
            onClick={handleLogIn}
          >
            Register
          </Button>
        </div>

        <LinkComponent onClick={handleRedirectRegister}>
          Caso já tenha um cadastro, clique aqui!
        </LinkComponent>
      </Content>
    </Container>
  );
};
