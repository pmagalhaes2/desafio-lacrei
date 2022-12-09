import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element="" />
        <Route path="/pessoa-usuaria" element="" />
        <Route path="/profissional" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
