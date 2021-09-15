import React from "react";
import styled from "styled-components/macro";
import "react-on-scroll-animation/build/index.css";
/*Animations are based on css files you can easily
  overwriting it by you own rules, but you have to import
  css files from build pack separately.
  You can import or copy this file directly to your sass file as well.*/
import Rosa from "react-on-scroll-animation" ;



const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 2em;
  data-aos: fade-up;
  width: 60%;

  @media screen and (max-width: 480px) {
    width: 100%;
  justify-content: center;
  flex-direction: column;
}

`;

const ServiceImg = styled.img`
width: 30em;
height: 40em;

  @media screen and (max-width: 480px) {
  width: 12em;
  height: 16em;
}
`;

const DescriptionContainer = styled(Rosa)`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  align-items: center;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: SF TransRobotics;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  margin: 10px 0;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 36px;
  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: Disposable Droid BB;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  max-width: 80%;

  font-color: ${({ isReversed }) => isReversed && "#FFFFFF"};

  @media screen and (max-width: 480px) {
    max-width: 90%;
    width: 100%;
    font-size: 22px;
}
`;


export function OurService(props) {
const { imgUrl, title, description1, description2, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
        <DescriptionContainer animation="zoom-in" duration={300} delay={100}>
          <Title> {title} </Title>
          <Details> {description1} </Details>
          <Details> {description2} </Details>
        </DescriptionContainer>
        <Rosa animation="zoom-in"
          duration={300}
          delay={250}>
        <ServiceImg src={imgUrl} />
        </Rosa>
    </ServiceContainer>

  );

}
