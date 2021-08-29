import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurBot } from "../../components/ourBot";

import BotOne from "../../assets/illustrations/bot1.jpg";
import BotTwo from "../../assets/illustrations/bot2.jpg";
import BotThree from "../../assets/illustrations/bot3.jpg";
import BotFour from "../../assets/illustrations/bot4.jpg";

import BotOneReal from "../../assets/illustrations/hotdog_bot_no_background.png";


const BotSectionContainer = styled(Element)`
  width: 100%;
  min-height:800px;
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
  max-width: 75%;


  @media screen and (max-width: 480px) {
  text-align: center;
  font-size: 28px;
}
`;


export function BotSection(props) {
  return (

    <BotSectionContainer name="botSection">
    <SectionTitle> The Bots </SectionTitle>
    <SectionDescription>Each Bot can have numerous combinations of accessories, colors and backgrounds that will make it unique, but all conform to 1 of 4 base designs </SectionDescription>

      <BotContainerRow>
        <Marginer direction="vertical" margin="1em" />
        <OurBot
          title="S.B.01"
          imgUrl={BotOneReal}
          description = "After being exposed to emotions, anger quickly became the dominant feeling in S.B.01. It transfers this fury into strength and takes pride in being the biggest"
        />
        <OurBot
          title="A.B.07"
          imgUrl={BotOneReal}
          description = "Finding comfort in its new found isolation, A.B.07 specializes in stealth and uses sneak tactics to deceive others when they approach"
        />
        <OurBot
          title="I.B.04"
          imgUrl={BotOneReal}
          description = "Left to its own thoughts and newly discovered anxiety, I.B.2.0 specializes in intelligence and can overclock its system to out think and outwit the other bots"
        />
        <OurBot
          title="Q.B.03"
          imgUrl={BotOneReal}
          description = "Developing an incredible ability to run whenever anything approaches its personal space, Q.B.03 takes advantage of its speed in any scenario it feels threatened"
        />
      </BotContainerRow>

    </BotSectionContainer>

  );

}
