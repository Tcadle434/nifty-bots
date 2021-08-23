import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";


import BackgroundImg from "../../assets/pictures/top_background_sized.jpg";
import BotOne from "../../assets/illustrations/bot1.jpg";
import BotTwo from "../../assets/illustrations/bot2.jpg";
import BotThree from "../../assets/illustrations/bot3.jpg";
import BotFour from "../../assets/illustrations/bot4.jpg";


import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { CarouselCard } from "../../components/carouselCard";
import { Element, scroller } from "react-scroll";

import Typist from "react-typist";
import Coverflow from 'react-coverflow';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image:url(${BackgroundImg});
  position=relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SloganText = styled.h1`
  font-family: Roboto Condensed;
  font-size: 64px;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4
`;

const MintText = styled.h2`
  font-family: Roboto Condensed;
  font-size: 48px;
  font-weight: 400;
  color: ${theme.primary};
  margin: 0;
  line-height: 1.4
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export function TopSection(props) {

  return(
  <Element name="topSection">
    <TopContainer>
      <BackgroundFilter>
      <Navbar />
        <Marginer direction="vertical" margin="4em" />
        <SloganText>Are You Ready To</SloganText>
        <SloganText>Rumble?</SloganText>
        <Marginer direction="vertical" margin="4em" />

        <CarouselContainer>
          <CarouselCard imgUrl={BotOne} />
          <CarouselCard imgUrl={BotTwo} />
          <CarouselCard imgUrl={BotThree} />
          <CarouselCard imgUrl={BotFour} />
        </CarouselContainer>

        <Marginer direction="vertical" margin="4em" />
        <Typist>
          <MintText> Minting Soon on Solana...</MintText>
        </Typist>

      </BackgroundFilter>
    </TopContainer>
  </Element>
  );
}
