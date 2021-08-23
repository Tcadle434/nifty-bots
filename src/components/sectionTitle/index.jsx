const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #FFFFFF;
  font-family: Roboto Condensed;

  @media screen and (max-width: 480px) {
  text-align: center;
  font-size: 36px;
}
`;
