import vector from "../../assets/vector_3.svg";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";

const ProfissionalContent = () => {
  return (
    <div className="container">
      <div className="text-container">
        <Title titleText="Profissional" />
        <Paragraph
          paragraphText="
          Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
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

export default ProfissionalContent;
