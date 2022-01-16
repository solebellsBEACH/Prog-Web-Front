import { Header } from "../../../components/Header";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { TesteAuxiliarItem } from "../../../components/TestAuxiliarComponents/TesteAuxiliarItem";
import { Container, ContainerGrid, Content } from "../styles";
import testAuxiliarMock from "../../../utils/mock/testAuxiliarMock.json";
export const TesteAuxiliar: React.FC = () => {
  console.log(testAuxiliarMock);
  return (
    <Container style={{}}>
      <Header label="Teste Auxiliar" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <SettingBox />
        </div>
        <ContainerGrid>
          {testAuxiliarMock.info.map((item) => (
            <TesteAuxiliarItem
              redirectUrl={item.redirectUrl}
              label={item.label}
              contentText={item.contentText}
            />
          ))}
        </ContainerGrid>
      </Content>
    </Container>
  );
};
