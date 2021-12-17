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
          <AnimalItem name="Bob" age={5} breed="Pit Bull" />
        </ContainerGrid>
      </Content>
    </Container>
  );
};
