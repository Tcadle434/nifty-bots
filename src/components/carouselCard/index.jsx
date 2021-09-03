import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Coverflow from 'react-coverflow';


const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

`;

const BotImg = styled.img`
  width: 11em;
  height: 14.5em;
  transition: transform .2s; /* Animation */

  &:hover {
        transform:scale(1.3, 1.3);
  }

  @media screen and (min-width: 1281px) and (max-width: 1680px) {
    width: 8em;
    height: 11em;

}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  width: 6em;
  height: 8em;

}

@media screen and (max-width: 1024px) and (max-height: 600px) {
  width: 5em;
  height: 6.5em;

}

  @media screen and (max-width: 480px) {
  width: 4.5em;
  height: 6em;
}

@media screen and (max-width: 480px) and (max-height: 660px) {
  width: 4.5em;
  height: 6em;
}

@media screen and (max-width: 480px) and (max-height: 600px) {
  width: 3.5em;
  height: 4.5em;
}

`;

export function CarouselCard(props) {
const { imgUrl } = props;

  return (
    <CardContainer>
      <BotImg src={imgUrl} />
    </CardContainer>

  );
}
