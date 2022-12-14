import styled from "styled-components";

export const FooterContent = styled.footer`
  border-top: 1px solid var(--light-green);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
  padding: 2rem 0px 0.5rem;
  margin: 0px 4rem;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;
