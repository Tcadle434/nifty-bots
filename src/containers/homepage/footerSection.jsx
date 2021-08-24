import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { ColoredLine } from "../../components/line";
import { theme } from "../../theme";

import DiscordImg from "../../assets/illustrations/discord.png";
import TwitterImg from "../../assets/illustrations/twitter.png";
import MediumImg from "../../assets/illustrations/medium.png";

const FooterContainer = styled(Element)`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0
`;

const FooterTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: ${theme.primary};
  font-family: Roboto Condensed;
  text-align: center;


  @media screen and (max-width: 480px) {
  text-align: center;
  font-size: 36px;
  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  max-width: 50%;

  @media screen and (max-width: 480px) {
    max-width: 90%;
    width: 100%;
    font-size: 14px;
}
`;

const SocialMediaImg = styled.img`
  width: 10em;
  height: 8em;

  @media screen and (max-width: 480px) {
  width: 6em;
  height: 5em;
}
`;

const MediumImgContainer = styled.img`
  width: 8em;
  height: 8em;

  @media screen and (max-width: 480px) {
  width: 4em;
  height: 4em;
}
`;

const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
`;


export function FooterSection(props) {
  return (
    <FooterContainer>
    <ColoredLine />
      <FooterTitle>
        Follow Us
      </FooterTitle>
      <Details> © 2021 | NiftyBots </Details>
      <Marginer direction="vertical" margin="1em" />

      <SocialMediaRow>
        <SocialMediaImg src={DiscordImg} />
        <SocialMediaImg src={TwitterImg} />
        <SocialMediaImg src={MediumImg} />
      </SocialMediaRow>
    </FooterContainer>

  );

}
