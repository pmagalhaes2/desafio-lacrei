import styled from "styled-components";

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    color: var(--black);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
