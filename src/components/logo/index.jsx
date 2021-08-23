import React from "react";
import styled, { css } from "styled-components";

import NftLogo from "../../assets/logo/battlebots.jpg";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({inline}) => (inline ? "row" : "column")};
  align-items: ${({ inline }) => inline && "center"};
`;

const LogoImg = styled.img`
  width: 16em;
  height: 16em;

  ${({inline}) => inline &&
  css`
  width: 100px;
  height: 100px;
  margin-right: 6px;
  `};

  @media screen and (max-width: 480px) {
  margin-right: 2px;
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
