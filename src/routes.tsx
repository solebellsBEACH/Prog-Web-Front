import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";

export const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};
