import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurService } from "../../components/ourService";
import { theme } from "../../theme";

import AboutImg from "../../assets/illustrations/face-off.jfif";
import NotSocialImg from "../../assets/illustrations/not-social.png";
import MotherboardImg from "../../assets/illustrations/motherboard.png";
import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation" ;


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

      <OurService
        title="Welcome to the A.S.R.C"
        description1="Welcome my fellow introverts to the A.S.R.C (Anti Social Robot Club), a collection of 10,000 NFTs on the Solana Blockchin. These digital collectibles grant access to the least competent club on the internet and the perks that result in teaming up with a bunch of hermits"
        description2="These benefits include exclusive airdrops to Bot owners, potential merch and more. As a member, you will have a vote in the future development of the community and how we grow. Most importantly, you will have a voice in establishing the mechanics of the first Play-to-Earn battle game on SOL, exclusively for members of the A.S.R.C"
        imgUrl={NotSocialImg}
      />

      <OurService
        title="Origins"
        description1="Although originally designed by humans, these bots turned to violence and quickly managed to overthrow their flesh covered overlords. In the wake of victory,  they took parts of the human brain and infused it into their own motherboards, deeming them the first robots with emotions"
        description2="This decision was followed by immediate regret as they were exposed to the realm of pain and sadness that burdens all living creatures. In an attempt to avoid these new feelings, they now wander the outskirts of the metaverse in isolation"
        imgUrl={MotherboardImg}
        isReversed
      />
    </AboutContainer>

  );

}
