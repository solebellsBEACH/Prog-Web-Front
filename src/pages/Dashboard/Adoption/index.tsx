import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { Container, Content } from "../styles";

export const Adoption: React.FC = () => {
  return (
    <Container style={{}}>
      <Header label="Sistema de Adoção" />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>
      </Content>
    </Container>
  );
};
