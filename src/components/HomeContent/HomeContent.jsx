import Button from "../Button/Button";
import "./home-content.css";
import vector from "../../assets/vector_1.svg";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="buttons-container">
          <Button class="green-button">
            <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
          </Button>
          <Button class="green-border-button">
            <Link to="/profissional">Profissional</Link>
          </Button>
        </div>
      </div>
      <div className="image-container">
        <img
          src={vector}
          alt="Vetor enfermeira lendo relatório de saúda de paciente"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
