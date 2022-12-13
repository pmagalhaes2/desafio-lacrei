import vector from "../../assets/vector_3.svg";
import { ParagraphWithBorder } from "../Paragraph/styles";
import { Container, TextAndImageContainer } from "../Container/styles.js";
import { Title } from "../Title/styles";

const ProfissionalContent = () => {
  return (
    <Container>
      <TextAndImageContainer>
        <Title>Profissional</Title>
        <ParagraphWithBorder>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </ParagraphWithBorder>
      </TextAndImageContainer>
      <TextAndImageContainer>
        <img
          src={vector}
          alt="Vetor enfermeira lendo relatório de saúda de paciente"
        />
      </TextAndImageContainer>
    </Container>
  );
};

export default ProfissionalContent;
