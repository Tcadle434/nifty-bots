import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurBot } from "../../components/ourBot";
import { OriginService } from "../../components/originService";

import BotOne from "../../assets/illustrations/bot1.jpg";
import BotTwo from "../../assets/illustrations/bot2.jpg";
import BotThree from "../../assets/illustrations/bot3.jpg";
import BotFour from "../../assets/illustrations/bot4.jpg";

import BotOneReal from "../../assets/illustrations/hotdog_bot_no_background.png";
import BotGifNew from "../../assets/illustrations/bot_gif_new.gif";


const BotSectionContainer = styled(Element)`
  width: 100%;
  min-height:750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0
`;

const BotContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: "row";
  margin-bottom: 2em;
  max-width: 90%;

  @media screen and (max-width: 480px) {
  width: 100%;
  display: block;
}
`;

export const SectionDescription = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
  font-family: Disposable Droid BB;
  text-align: center;
  max-width: 60%;


  @media screen and (max-width: 480px) {
  text-align: center;
  font-size: 28px;
}
`;


export function BotSection(props) {
  return (

    <BotSectionContainer name="botSection">
      <OriginService
        title="Origins"
        description1="Although originally designed by humans, these bots turned to violence and quickly managed to overthrow their flesh covered overlords. This became known in legend as R-DAY. In the wake of victory,  they took parts of the human brain and infused it into their own motherboards, deeming them the first robots with emotions"
        description2="This decision was followed by immediate regret as they were exposed to the realm of pain and sadness that burdens all living creatures. In an attempt to avoid these new feelings, they now wander the outskirts of the metaverse in isolation"
        imgUrl={BotGifNew}
        isReversed
      />

    </BotSectionContainer>

  );

}
