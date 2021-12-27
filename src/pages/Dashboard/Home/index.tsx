import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Header } from "../../../components/Header";
import { InformationItem } from "../../../components/InformationItem";
import { SettingBox } from "../../../components/SettingsBox";
import { TaskBar } from "../../../components/TaskBar";
import { Container, Content } from "../styles";
//ESSA FUNCAO RETORNA A PAGINA HOME DO DASHBOARD
export const Home: React.FC = () => {
  const test =
    "Slash completou a formação clássica do Guns N' Roses em 1986 e, no ano seguinte, o grupo lançou seu primeiro disco, Appetite for Destruction, que não teve nenhum grande impacto inicial, mas acabou ganhando grande popularidade com o tempo, transformando-se em um sucesso de vendas e consolidando a carreira do grupo. Em 1991, o conjunto lança seu novo disco dividido em duas partes, Use Your Illusion I e Use Your Illusion II, e apesar dos álbuns terem atingido grande sucesso, o relacionamento de Slash com o vocalista Axl Rose se deteriorou com o passar dos anos e o guitarrista deixou o grupo em 1996.";
  return (
    <Container>
      <Header label="Home" />
      <TaskBar />
      <Content>
        <div id="setting-box">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Especie do animal"
              onChange={() => {}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <SettingBox />
        </div>
        <InformationItem
          type_of_animal={1}
          subtitle="Test"
          contentText={test}
        />
        <InformationItem
          type_of_animal={3}
          subtitle="Test"
          contentText={test}
        />
        <InformationItem
          type_of_animal={2}
          subtitle="Test"
          contentText={test}
        />
        <InformationItem
          type_of_animal={4}
          subtitle="Test"
          contentText={test}
        />
      </Content>
    </Container>
  );
};
