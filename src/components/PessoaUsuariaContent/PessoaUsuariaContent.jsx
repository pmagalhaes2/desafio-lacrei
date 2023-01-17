import { ParagraphWithBorder } from "../Paragraph/styles";
import vector from "../../assets/vector_2.svg";
import { Container, TextAndImageContainer } from "../Container/styles";
import { Title } from "../Title/styles";
import { Helmet } from "react-helmet";

const PessoaUsuariaContent = () => {
  return (
    <Container>
       <Helmet><title>Lacrei | Pessoa Usuária</title></Helmet>
      <TextAndImageContainer>
        <Title>Pessoa Usuária</Title>
        <ParagraphWithBorder>
          A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
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

export default PessoaUsuariaContent;
