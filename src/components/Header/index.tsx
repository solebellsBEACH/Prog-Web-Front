import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, config } from "../../utils/api/api";
import { Container, Content, PageLabel } from "./styles";

//REPRESENTA A PROP NECESSARIA DO COMPONENTE, NESSE CASO SÓ O NOME DA PAGINA
interface IHeaderProps {
  label: string;
}

export const Header = ({ label }: IHeaderProps) => {
  const [actualUser, setActualUser] = useState<
    {
      id: number;
      username: string;
      type_user_id: number;
    }[]
  >([]);

  useEffect(() => {
    getActualUser();
  }, []);
  const navigate = useNavigate();

  const getActualUser = async () => {
    const res = await api.get("actualUser", config);
    setActualUser(res.data);
  };

  return (
    <Container>
      {label == "Home" ? (
        <Content style={{ backgroundColor: "#191970", color: "white" }}>
          Boas Vindas {actualUser[0]?.username}
        </Content>
      ) : (
        <></>
      )}

      <Content>Mel - Adoções e cuidados</Content>
      <PageLabel>{label}</PageLabel>
    </Container>
  );
};
