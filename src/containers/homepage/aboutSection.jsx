import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurService } from "../../components/ourService";
import { theme } from "../../theme";

import AboutImg from "../../assets/illustrations/face-off.jfif";
import PeaceGraphic from "../../assets/illustrations/peace_graphic.png";

import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;


const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 700x;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0
`;


export function AboutSection(props) {
  return (
    <AboutContainer name="aboutSection">

      <OurService
        title="Welcome"
        description1="Welcome my fellow introverts to the A.S.R.C (Anti Social Robot Club), a collection of 10,000 NFTs on the Solana Blockchin. These digital collectibles grant access to the least competent club on the internet and the perks that result in teaming up with a bunch of hermits"
        description2="These benefits include exclusive airdrops to Bot owners, potential merch and more. As a member, you will have a vote in the future development of the community and how we grow. Most importantly, you will have a voice in establishing the mechanics of the first Play-to-Earn battle game on SOL, exclusively for members of the A.S.R.C"
        imgUrl={PeaceGraphic}
      />
    </AboutContainer>

  );

}
