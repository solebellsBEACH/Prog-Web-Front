import { Container } from "./styles";
import { ContainerIconBox, ContainerTaskBox, LabelBox } from "./TaskBoxStyles";
import { IoMdBook } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { GiDogBowl } from "react-icons/gi";
//PEGA AS PROPS DO ELEMENTO
interface ITaskBoxProps {
  label: string;
  callBackFunct: () => void;
  icon: any;
}

const TaskBox = ({ label, callBackFunct, icon }: ITaskBoxProps) => {
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
        label="Novo animal"
        callBackFunct={() => {
          navigate("/new-animal");
        }}
        icon={<GiDogBowl size={45} />}
      />
      <TaskBox
        label="Sistema de adoção"
        icon={<FaHandHoldingHeart size={40} />}
        callBackFunct={() => {
          navigate("/adoption");
        }}
      />
    </Container>
  );
};
