import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home/Home";
import PessoaUsuaria from "../pages/PessoaUsuaria/PessoaUsuaria";
import Profissional from "../pages/Profissional/Profissional";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Nav />
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
