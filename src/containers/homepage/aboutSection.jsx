import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme";
import { OurBot } from "../../components/ourBot";
import FirstBot from "../../assets/illustrations/101.png";
import SecondBot from "../../assets/illustrations/953.png";
import ThirdBot from "../../assets/illustrations/1618.png";
import FourthBot from "../../assets/illustrations/1025.png";
import FifthBot from "../../assets/illustrations/3519.png";
import UsbUp from "../../assets/illustrations/usb_up_no_background.png";
import UsbDown from "../../assets/illustrations/usb_view_no_back.png";
import ThreeDMovie from "../../assets/videos/MOV_1838.mov";



const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 2200px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.92);

  @media screen and (max-width: 480px) {
    min-height: 1800px;

}
`;

export const AboutTitle = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: ${theme.primary};
  font-family: Share Tech Mono;
  margin-left: 5%;


  @media screen and (max-width: 480px) {
  font-size: 28px;
}
`;

export const AboutContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  font-family: Share Tech Mono;
  margin-left: 5%;
  margin-right: 10%;


  @media screen and (max-width: 480px) {
  font-size: 14px;
  margin-left: 5%;
  margin-right: 9%;
}
`;

const BotContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;

  @media screen and (max-width: 480px) {
    display: inline-block;
}
`;

const UsbContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const UsbContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width: 480px) {
  }
`;

const UsbImg = styled.img`
  width: 24em;
  height: 13.5em;

  @media screen and (max-width: 480px) {
  width: 10em;
  height: 6em;
}

@media screen and (min-width: 480px) and (max-width: 860px) {
  width: 12em;
  height: 7em;
}

@media screen and (min-width: 860px) and (max-width: 1280px) {
  width: 18em;
  height: 9.5em;
}
`;

const Video = styled.video`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 53em;
  height: 30em;
  margin: 4em auto;

@media screen and (max-width: 480px) {
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 1200px) {
  width: 100%;
}
`;

const styles = {
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'},
    blue: {color: '#16B1F3', fontWeight: 'bold'},
    orange: {color: '#D74F03', fontWeight: 'bold'}
};

export function AboutSection(props) {
  return (
    <AboutContainer name="aboutSection">
      <AboutTitle> Origin Story </AboutTitle>
      <AboutContent> Although originally designed by humans, these bots turned to violence and quickly managed to overthrow their flesh covered overlords. This became known in legend as <span style={styles.blue}>R-DAY</span>. In the wake of victory, they took parts of the human brain and infused it into their own motherboards, deeming them the first robots with emotions </AboutContent>
      <AboutContent> This decision was followed by immediate regret as they were exposed to the realm of pain and sadness that burdens all living creatures. In an attempt to avoid these new feelings, they now wander the outskirts of the metaverse in isolation</AboutContent>

      <UsbContainer>
      <BotContainerRow>
        <OurBot imgUrl={FirstBot} />
        <OurBot imgUrl={SecondBot} />
        <OurBot imgUrl={ThirdBot} />
        <OurBot imgUrl={FifthBot} />
      </BotContainerRow>
      </UsbContainer>

      <AboutTitle> 3D Upgrade </AboutTitle>
      <AboutContent> Ownership of one of the original 4,444 2D bots makes you elligible for a USB airdrop, giving you the option of upgrading your bot to a more menacing 3D version. When the robots undergo the upgrade, the 2D bot is <span style={styles.orange}>burned</span> thus making them <span style={styles.blue}>deflationary</span> </AboutContent>
      <UsbContainer>
        <UsbContainerRow>
          <UsbImg src={UsbUp} />
          <UsbImg src={UsbDown} />
        </UsbContainerRow>
      </UsbContainer>
      <AboutContent> The 3D robots will be the playable avatars in the ASRC metaverse, whereas the 2D bots will serve as staking multipliers for earning $ROBO, our in-game currency</AboutContent>

      <Video loop autoPlay muted>
        <source src={ThreeDMovie} type="video/mp4" />
      </Video>

    </AboutContainer>

  );

}
