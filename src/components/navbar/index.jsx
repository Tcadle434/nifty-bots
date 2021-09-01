import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Logo } from "../logo";
import { Button } from "../button";
import { Marginer } from "../../components/marginer";
import { Element, scroller } from "react-scroll";


const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  `;

const BrandContainer = styled.div`
  margin-left: 15%;

  @media screen and (max-width: 480px) {
  margin-left: 5%;
}
  `;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MetamaskButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: ${theme.primary};
    border: none;
    color: rgb(199,199,199);
  }
`;

export function Navbar(props) {
  const scrollToAboutSection= () => {
    scroller.scrollTo("aboutSection", { smooth: true, duration: 1500 })
  }
  const scrollToFeaturesSection= () => {
    scroller.scrollTo("featuresSection", { smooth: true, duration: 1500 })
  }
  const scrollToRoadmapSection= () => {
    scroller.scrollTo("roadmapSection", { smooth: true, duration: 1500 })
  }

  return (
    <NavbarContainer>
      <AccessibilityContainer>
        <Button small onClick={scrollToAboutSection}> About </Button>
        <Marginer direction="horizontal" margin="16px" />
        <Button small onClick={scrollToFeaturesSection}> Features </Button>
        <Marginer direction="horizontal" margin="16px" />
        <Button small onClick={scrollToRoadmapSection}> Roadmap </Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );

}
