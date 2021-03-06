import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
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
        .post("user", { email: email, password: password, username: name })
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
        <Button
          style={{ backgroundColor: "#4B0082", marginTop: "2vh" }}
          variant="contained"
          onClick={handleLogIn}
        >
          Register
        </Button>
        <LinkComponent onClick={handleRedirectRegister}>
          Caso já tenha um cadastro, clique aqui!
        </LinkComponent>
      </Content>
    </Container>
  );
};
