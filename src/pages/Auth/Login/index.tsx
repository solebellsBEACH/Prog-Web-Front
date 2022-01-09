import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { api } from "../../../utils/api/api";
import { Container, Content, LinkComponent, Subtitle } from "../styles";

// AQUI TEMOS A FUNCAO QUE GERA A PAGINA DE LOG IN
export const Login = () => {
  //ARMAZENA O ESTADO DE EMAIL E PASSWORD
  const [state, setState] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const postSessionAndToDashboard = () => {
    if (state.email != "" && state.password != "") {
      api
        .post("session", { email: state.email, password: state.password })
        .then((req) => {
          navigate("/dashboard");
        })
        .catch((e) => {
          Swal.fire("Erro ao logar!", "Por favor, tente novamente!", "error");
          console.log(e);
        });
    } else {
      Swal.fire("Erro ao criar usuário!", "Não envie campos vazios!", "error");
    }
  };
  //FUNCAO DE QUANDO CLICAMOS NO BOTAO DE LOG IN
  const handleLogIn = () => {
    try {
      postSessionAndToDashboard();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirectRegister = () => {
    navigate("/register");
  };

  return (
    <Container>
      <Content>
        <Subtitle>Login</Subtitle>
        <TextField
          id="outlined-basic"
          className="text-field"
          label="Email"
          name="email"
          variant="outlined"
          onChange={(e) => {
            setState({ email: e.target.value, password: state.password });
          }}
        />

        <TextField
          id="outlined-basic"
          className="text-field"
          label="Senha"
          name="password"
          variant="outlined"
          type="password"
          onChange={(e) => {
            setState({ email: state.email, password: e.target.value });
          }}
        />
        <Button
          style={{ backgroundColor: "#4B0082", marginTop: "2vh" }}
          variant="contained"
          onClick={handleLogIn}
        >
          LogIn
        </Button>
        <LinkComponent onClick={handleRedirectRegister}>
          Caso não tenha um cadastro, clique aqui!
        </LinkComponent>
      </Content>
    </Container>
  );
};
