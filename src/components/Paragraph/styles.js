import styled from "styled-components";

export const Paragraph = styled.p`
  color: var(--grey);
  font-weight: var(--font-regular);
  font-size: 1.5rem;
  margin-top: 2rem;
  padding-left: 0px;
  border-left: none;
`;

export const SmallParagraph = styled.p`
  color: var(--grey);
  font-size: 0.75rem;
  padding-left: 0px;
  border-left: none;
`;

export const ParagraphWithBorder = styled(Paragraph)`
  border-left: 5px solid rgb(1, 135, 98);
  padding-left: 1rem;
`;
