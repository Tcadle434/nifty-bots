import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "8px 11px " : "16px 22px")};
  border-radius: 5px;
  background-color: transparent;
  color: #FFFFFF;
  font-weight: normal;
  font-size: ${({small}) => (small ? "20px" : "30px")};
  font-family: Roboto Condensed;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primary};
    border: none;
    color: #FFFFFF;
  }

  @media screen and (max-width: 480px) {
  font-size: 12px;
}
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
