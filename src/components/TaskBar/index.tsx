import { Container } from "./styles";
import { ContainerIconBox, ContainerTaskBox, LabelBox } from "./TaskBoxStyles";
import { IoMdBook } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
//PEGA AS PROPS DO ELEMENTO
interface TaskBoxProps {
  label: string;
  callBackFunct: () => void;
  icon: any;
}

const TaskBox = ({ label, callBackFunct, icon }: TaskBoxProps) => {
  return (
    <ContainerTaskBox>
      <ContainerIconBox>{icon}</ContainerIconBox>
      <LabelBox onClick={callBackFunct}>
        <p>{label}</p>
      </LabelBox>
    </ContainerTaskBox>
  );
};
//ESSE É RESPONSAVEL POR FICAR COMO BARRA DE TAREFA  Q FICA NO SUPERIOR DA PAGINA
export const TaskBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <TaskBox
        label="Informações Gerais"
        callBackFunct={() => {}}
        icon={<IoMdBook size={45} />}
      />
      <TaskBox
        label="Sistema de adoção"
        icon={<FaHandHoldingHeart size={40} />}
        callBackFunct={() => {
          navigate("/adoption");
        }}
      />
      <TaskBox
        label="Teste auxiliar"
        icon={<ImCheckmark2 size={45} />}
        callBackFunct={() => {}}
      />
    </Container>
  );
};
