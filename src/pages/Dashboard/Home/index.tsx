import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { Container, Content } from "../styles";

export const Home: React.FC = () => {
  return (
    <Container style={{}}>
      <Header label="Home" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>
      </Content>
    </Container>
  );
};
