import { Header } from "../../../components/Header";
import { InformationItem } from "../../../components/InformationItem";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { Container, Content } from "../styles";
//ESSA FUNCAO RETORNA A PAGINA HOME DO DASHBOARD
export const Home: React.FC = () => {
  return (
    <Container style={{}}>
      <Header label="Home" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>

        <InformationItem
          type_of_animal={1}
          subtitle="Test"
          contentText="kdkdkdkdkdkkk sdkdkdkdkkdk dkdkkdkdkdkd dkdkdkdkdk dkdkdkkd"
        />
      </Content>
    </Container>
  );
};
