import { AnimalForm } from "../../../components/Forms";
import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { Container, Content } from "../styles";

import { FormContainer } from "./styles";

export const RegisterNewAnimal: React.FC = () => {
  return (
    <Container style={{}}>
      <Header label="Novo animal" />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>
        <FormContainer>
          <AnimalForm />
        </FormContainer>
      </Content>
    </Container>
  );
};
