import vector from "../../assets/vector_1.svg";
import { Link } from "react-router-dom";
import { Paragraph } from "../Paragraph/styles";
import { GreenBorderButton, GreenButton } from "../Button/styles";
import {
  ButtonContainer,
  Container,
  TextAndImageContainer,
} from "../Container/styles";
import { Title } from "../Title/styles";
import { Helmet } from "react-helmet";

const HomeComponent = () => {
  return (
    <Container>
       <Helmet><title>Lacrei | Home</title></Helmet>
      <TextAndImageContainer>
        <Title>Boas vindas a Lacrei Saúde</Title>
        <Paragraph>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Paragraph>

        <ButtonContainer>
          <GreenButton>
            <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
          </GreenButton>
          <GreenBorderButton>
            <Link to="/profissional">Profissional</Link>
          </GreenBorderButton>
        </ButtonContainer>
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

export default HomeComponent;
