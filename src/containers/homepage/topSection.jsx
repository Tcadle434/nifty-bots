import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import BackgroundImg from "../../assets/pictures/top_background_sized.jpg";
import BotOneReal from "../../assets/illustrations/hotdog_bot.jpeg";

import BoxingImg from "../../assets/illustrations/boxing_sample.jpg";
import GymImg from "../../assets/illustrations/gym_sample.jpg";
import LaserEyeImg from "../../assets/illustrations/laser_eye_sample.jpg";
import MaskFuckOffImg from "../../assets/illustrations/mask_fuck_off_sample.jpg";
import NoEyesImg from "../../assets/illustrations/no_eyes_sample.jpg";
import PickleRickImg from "../../assets/illustrations/pickle_rick_sample.jpg";
import WizardImg from "../../assets/illustrations/wizard_dont_talk_sample.jpg";
import ZombieImg from "../../assets/illustrations/zombie_vibes_sample.jpg";

import BotTwoLasso from "../../assets/illustrations/bot_2_lasso_fingergun.jpg";
import BotTwoPopsicle from "../../assets/illustrations/bot_2_popsicle_glasses.jpg";
import BotTwoEyebrows from "../../assets/illustrations/bot_2_eyebrows.jpg";

import BotThreeLightsaber from "../../assets/illustrations/bot_3_lightsaber_beer.png";
import BotThreeHair from "../../assets/illustrations/bot_3_hair_stop.png";

import BotFourEmo from "../../assets/illustrations/bot_4_emo.png";
import BotHotdog from "../../assets/illustrations/bot_4_hotdog.png";
import BotFourPirate from "../../assets/illustrations/bot_4_pirate_lightsaber.png";

import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Logo } from "../../components/logo";

import { CarouselCard } from "../../components/carouselCard";
import { Element, scroller } from "react-scroll";

import Typist from "react-typist";
import Coverflow from 'react-coverflow';

import { useMediaQuery } from "react-responsive";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position=relative;

  @media screen and (max-width: 480px) {
    height: 100vh;
}
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SloganTextContainer = styled.div`
  width: 33%;
`;

const SloganText = styled.h1`
  font-family: SF TransRobotics;
  font-size: 64px;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4;
  text-align: center;

  @media screen and (max-width: 480px) {
  width: 100%;
  font-size: 32px;
}

`;

const MintText = styled.h2`
  font-family: Disposable Droid BB;
  font-size: 56px;
  font-weight: 400;
  color: ${theme.primary};
  margin: 0;
  line-height: 1.4;

  @media screen and (max-width: 480px) {
  width: 100%;
  font-size: 24px;
  text-align: center;
}

`;

const SubText = styled.h2`
  font-family: Disposable Droid BB;
  font-size: 56px;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;

  @media screen and (max-width: 480px) {
  width: 100%;
  font-size: 24px;
  text-align: center;
}

`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 40px;

  @media screen and (max-width: 480px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
}
`;

const CarouselContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 480px) {
  width: 100%;
  display: flex;
  align-items: center;
}
`;

const CarouselContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  @media screen and (max-width: 480px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 0%;

}
`;

const LogoContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;

  @media screen and (max-width: 480px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 0%;
  padding-bottom: 30px;

}
`;


export function TopSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return(
  <Element name="topSection">
    <TopContainer>
      <BackgroundFilter>
      <Navbar />

      <CarouselContainer>
        <LogoContainerColumn>
          <Logo/>

        </LogoContainerColumn>

        <CarouselContainerColumn>
          <CarouselContainerTwo>
            <CarouselCard imgUrl={BotTwoLasso} />
            <CarouselCard imgUrl={LaserEyeImg} />
            <CarouselCard imgUrl={BotFourEmo} />
          </CarouselContainerTwo>
          <CarouselContainerTwo>
            <CarouselCard imgUrl={BotHotdog} />
            <CarouselCard imgUrl={BotTwoEyebrows} />
            <CarouselCard imgUrl={BotThreeHair} />
          </CarouselContainerTwo>
          <CarouselContainerTwo>
            <CarouselCard imgUrl={BoxingImg} />
            <CarouselCard imgUrl={BotThreeLightsaber} />
            <CarouselCard imgUrl={MaskFuckOffImg} />
          </CarouselContainerTwo>
        </CarouselContainerColumn>

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
