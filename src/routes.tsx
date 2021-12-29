import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Adoption } from "./pages/Dashboard/Adoption";
import { Home } from "./pages/Dashboard/Home";
import { RegisterNewAnimal } from "./pages/Dashboard/RegisterNewAnimal";
//ESSE ARQUIVO É RESPONSAVEL POR CRIAR AS ROTAS E OS PATHS DA APLICACAO
export const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/new-animal" element={<RegisterNewAnimal />} />
      </Routes>
    </Router>
  );
};
