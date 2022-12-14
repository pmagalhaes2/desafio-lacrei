import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: var(--light-grey);
  padding: 0.5rem 4rem;

  a {
    color: var(--green);
    font-weight: var(--font-bold);
    font-size: 2rem;

    &:active {
      color: var(--green);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    flex-direction: column;
    justify-content: center;
  }
`;
