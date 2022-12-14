import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  padding: var(--padding-size);
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45rem;
    padding: 2rem 2rem 0px;
  }
`;

export const TextAndImageContainer = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    img {
      margin: 2rem auto;
      width: 90%;
    }
  }
`;

export const ButtonContainer = styled.div`
  max-width: 453px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContainer = styled.ul`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const HeaderContainer = styled(FooterContainer)`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;

  img:hover {
    filter: drop-shadow(0px 0px 5px var(--medium-green));
    transition: all 500ms;
  }
`;
