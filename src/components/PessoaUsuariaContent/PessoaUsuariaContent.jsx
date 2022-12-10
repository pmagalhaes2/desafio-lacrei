import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import "./pessoa-usuaria.css";
import vector from "../../assets/vector_2.svg";

const PessoaUsuariaContent = () => {
  return (
    <div className="container">
      <div className="text-container">
        <Title titleText="Pessoa Usuária" />
        <Paragraph
          paragraphText="
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora."
        />
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

export default PessoaUsuariaContent;
