import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30rem;
  padding: var(--padding-size);
  display: flex;
  justify-content: space-between;
`;

export const TextAndImageContainer = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  max-width: 453px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterContainer = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

export const HeaderContainer = styled(FooterContainer)``;

export const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;

  img:hover {
    filter: drop-shadow(0px 0px 5px var(--medium-green));
    transition: all 500ms;
  }
`;
