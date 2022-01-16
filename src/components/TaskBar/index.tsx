import { Container } from "./styles";
import { ContainerIconBox, ContainerTaskBox, LabelBox } from "./TaskBoxStyles";
import { IoMdBook } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GiDogBowl } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { resetAuthToken } from "../../utils/api/api";

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
        callBackFunct={() => {
          navigate("/dashboard");
        }}
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
      <TaskBox
        label="LogOut"
        icon={<ImExit size={35} />}
        callBackFunct={() => {
          resetAuthToken();
          navigate("/");
        }}
      />
      <ContainerTaskBox>
        <ContainerIconBox>{<BsCloudDownload size={40} />}</ContainerIconBox>
        <LabelBox>
          <a href="public/testDownload.txt" download>
            Sobre nós
          </a>
        </LabelBox>
      </ContainerTaskBox>
    </Container>
  );
};
