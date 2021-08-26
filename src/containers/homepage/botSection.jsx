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

  @media screen and (max-width: 480px) {
  width: 100%;
  display: block;
}
`;

export function BotSection(props) {
  return (

    <BotSectionContainer name="botSection">
    <SectionTitle> The Bots </SectionTitle>


      <BotContainerRow>
        <Marginer direction="vertical" margin="1em" />
        <OurBot
          title="Form 1"
          imgUrl={BotOneReal}
          description = "this is a test description of one of our bots look how cool he is omg wow woo yay"
        />
        <OurBot
          title="Form 2"
          imgUrl={BotOneReal}
          description = "this is a test description of one of our bots look how cool he is omg wow woo yay"
        />
        <OurBot
          title="Form 3"
          imgUrl={BotOneReal}
          description = "this is a test description of one of our bots look how cool he is omg wow woo yay"
        />
        <OurBot
          title="Form 4"
          imgUrl={BotOneReal}
          description = "this is a test description of one of our bots look how cool he is omg wow woo yay"
        />
      </BotContainerRow>

    </BotSectionContainer>

  );

}
