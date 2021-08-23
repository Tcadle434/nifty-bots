import React from "react";
import styled from "styled-components/macro";

const BotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

`;


const BotImg = styled.img`
  width: 18em;
  height: 24em;

  @media screen and (max-width: 480px) {
  width: 7em;
  height: 12em;
}
`;


const Title = styled.h2`
  color: #FFFFFF;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  margin: 10px 0;
`;

const Details = styled.p`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    max-width: 50%;

    @media screen and (max-width: 480px) {
      font-size: 16px;
      font-weight: normal;
    }
`;


export function OurBot(props) {
const { imgUrl, title, description } = props;

  return (
        <BotContainer>
          <Title> {title} </Title>
        <BotImg src={imgUrl} />
        <Details> {description} </Details>
        </BotContainer>
  );

}
