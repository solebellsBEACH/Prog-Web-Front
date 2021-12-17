import { AnimalItem } from "../../../components/AnimalItem";
import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { Container, Content } from "../styles";
import { ContainerGrid } from "./styles";

export const Adoption: React.FC = () => {
  return (
    <Container style={{}}>
      <Header label="Sistema de Adoção" />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>
        <ContainerGrid>
          <AnimalItem />
          <AnimalItem />
          <AnimalItem />
          <AnimalItem />
        </ContainerGrid>
      </Content>
    </Container>
  );
};
