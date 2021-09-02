import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { ColoredLine } from "../../components/line";
import { Button } from "../../components/button";
import { theme } from "../../theme";
import { Link } from 'react-router-dom';

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
  font-family: SF TransRobotics;
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
  width: 12em;
  height: 9em;

  @media screen and (max-width: 480px) {
  width: 6em;
  height: 5em;
}
`;


const SocialMediaRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrap = styled.button`
  align-items: center;
  color: transparent;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: none;
    transform:scale(1.3, 1.3);

  }

  @media screen and (min-width: 1024px) and (max-width: 1680px) {
  font-size: 24px;
  padding: ${({small}) => (small ? "16px 20px " : "16px 22px")};

}

  @media screen and (max-width: 480px) {
  font-size: 18px;
  padding: ${({small}) => (small ? "16px 20px " : "16px 22px")};

}

`;


export function FooterSection(props) {
  return (
    <FooterContainer>
    <ColoredLine />
      <FooterTitle>
        Follow Us
      </FooterTitle>

      <SocialMediaRow>
        <ButtonWrap>
          <a href="https://twitter.com/AntiSocialBots">
          <SocialMediaImg src={DiscordImg} />
          </a>
        </ButtonWrap>
        <ButtonWrap>
          <a href="https://twitter.com/AntiSocialBots">
          <SocialMediaImg src={TwitterImg} />
          </a>
        </ButtonWrap>
      </SocialMediaRow>
    </FooterContainer>

  );

}
