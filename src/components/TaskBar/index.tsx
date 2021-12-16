import { Container } from "./styles";
import { ContainerIconBox, ContainerTaskBox, LabelBox } from "./TaskBoxStyles";
import { IoMdBook } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";

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

export const TaskBar = () => {
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
        callBackFunct={() => {}}
      />
      <TaskBox
        label="Teste auxiliar"
        icon={<ImCheckmark2 size={45} />}
        callBackFunct={() => {}}
      />
    </Container>
  );
};
