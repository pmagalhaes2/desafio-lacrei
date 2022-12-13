import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import PessoaUsuaria from "../pages/PessoaUsuaria/PessoaUsuaria";
import Profissional from "../pages/Profissional/Profissional";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
        <Route path="/profissional" element={<Profissional />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
