import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../../../utils/api/api";
import { Container, Content, LinkComponent, Subtitle } from "../styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = () => {
    try {
      api.get("test");
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
            setEmail(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          className="text-field"
          label="Senha"
          name="password"
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
          LogIn
        </Button>
        <LinkComponent onClick={handleRedirectRegister}>
          Caso não tenha um cadastro, clique aqui!
        </LinkComponent>
      </Content>
    </Container>
  );
};
