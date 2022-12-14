import styled from "styled-components";

export const Button = styled.button`
  width: 192px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;

  a {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const GreenButton = styled(Button)`
  background-color: var(--green);
  border-color: var(--green);
  border: 0;

  &:hover {
    background-color: var(--medium-green);
    transition: all 300ms;
  }

  a {
    color: var(--white);
  }
`;

export const GreenBorderButton = styled(Button)`
  background-color: var(--white);
  border: 2px solid var(--green);

  &:hover {
    border-color: var(--medium-green);
    transition: all 300ms;
  }

  a {
    color: var(--green);

    &:hover {
      color: var(--medium-green);
      transition: all 300ms;
    }
  }
`;
