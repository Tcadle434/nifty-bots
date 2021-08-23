import React from "react";
import styled from "styled-components/macro";

const BotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const BotImg = styled.img`
  width: 18em;
  height: 24em;
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
