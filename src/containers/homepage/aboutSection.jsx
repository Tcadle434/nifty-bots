import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurService } from "../../components/ourService";
import { theme } from "../../theme";

import AboutImg from "../../assets/illustrations/face-off.jfif";

const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 700x;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(22, 177, 243, 0.5);
  padding: 10px; 0
`;


export function AboutSection(props) {
  return (
    <AboutContainer name="aboutSection">
      <SectionTitle> About </SectionTitle>
      <Marginer direction="vertical" margin="2em" />
      <OurService
        title="GETTING STARTED"
        description="The MonstroCities is the first true social avatar metaverse game. MonstroCities is a collection of 8,000 unique NFTs consisting of four elemental monster civilizations living on the Ethereum blockchain as $MONSTRO tokens. Every monster is programmatically generated from a pool of 424 accessories to ensure they are all completely unique.

Each monster will be a character in the MonstroCities metaverse game. While we have developed an initial game concept, the MonsterDAO will ultimately determine how the game develops.

At its core, MonstroCities is a series of community competitions between each of the four species. There will be a metaverse game built on The Sandbox once The Sandbox is open. Until then, web and Discord based games will be held frequently to determine who the strongest civilization is before the game even begins! More info below."
        imgUrl={AboutImg}
        isReversed
      />
    </AboutContainer>

  );

}
