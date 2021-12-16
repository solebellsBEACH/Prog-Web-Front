import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Content, LinkComponent, Subtitle } from "../styles";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/dashboard");
    console.log({ email: email, name: name, password: password });
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
