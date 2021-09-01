import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "16px 32px " : "16px 22px")};
  border-radius: 5px;
  background-color: transparent;
  color: #FFFFFF;
  font-weight: normal;
  font-size: ${({small}) => (small ? "40px" : "50px")};
  font-family: Disposable Droid BB;
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
  font-size: 18px;
  padding: ${({small}) => (small ? "16px 20px " : "16px 22px")};

}
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}
