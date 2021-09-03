import React from "react";
import styled, { css } from "styled-components";

import NftLogo from "../../assets/logo/ASRC_logo.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({inline}) => (inline ? "row" : "column")};
  align-items: ${({ inline }) => inline && "center"};
`;

const LogoImg = styled.img`
  width: 42em;
  height: 42em;

  ${({inline}) => inline &&
  css`
  width: 100px;
  height: 100px;
  margin-right: 6px;
  `};

  @media screen and (min-width: 1281px) and (max-width: 1680px) {
    width: 32em;
    height: 32em;

  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 24em;
    height: 24em;

  }

  @media screen and (max-width: 480px) {
    width: 10em;
    height: 10em;
}

@media screen and (max-width: 480px) and (max-height: 660px) {
  width: 8em;
  height: 8em;
}

@media screen and (max-width: 480px) and (max-height: 600px) {
  width: 6.5em;
  height: 6.5em;
}

`;

const LogoText = styled.div`
  margin-top: ${({inline}) => (inline ? 0 : "6px")};
  font-size: ${({inline}) => (inline ? "16px" : "64px")};
  color: ${({inline}) => (inline ? "#FFFFFF" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
const { inline } = props;

  return(
    <LogoContainer inline={inline}>
      <LogoImg src={NftLogo} inline={inline}/>
      <LogoText inline={inline}>
      </LogoText>
    </LogoContainer>

  );

}
