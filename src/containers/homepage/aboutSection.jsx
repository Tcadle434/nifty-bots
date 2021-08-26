import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurService } from "../../components/ourService";
import { theme } from "../../theme";

import AboutImg from "../../assets/illustrations/face-off.jfif";
import ScrollAnimation from 'react-animate-on-scroll';
import "react-on-scroll-animation/build/index.css";
/*Animations are based on css files you can easily
  overwriting it by you own rules, but you have to import
  css files from build pack separately.
  You can import or copy this file directly to your sass file as well.*/
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
      <SectionTitle> Origins </SectionTitle>
      <OurService
        description1="Welcome my fellow introverts to the A.S.R.C (Anti Social Robot Club). Although originally designed by humans, these bots turned to violence and quickly managed to overthrow their flesh covered overlords."
        description2="In the wake of victory,  they took parts of the human brain and infused it into their own motherboards, deeming them the first robots with emotions. This decision was followed by immediate regret as they were exposed to the realm of pain and sadness that burdens all living creatures. In an attempt to avoid these new feelings, they now wander the outskirts of the metaverse in isolation. When they bump into each other, it quickly turns to battle..."
        imgUrl={AboutImg}
        isReversed
      />
    </AboutContainer>

  );

}
