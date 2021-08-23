import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Coverflow from 'react-coverflow';


const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;

`;

const BotImg = styled.img`
  width: 13em;
  height: 18em;
  transition: transform .2s; /* Animation */

  &:hover {
        transform:scale(1.3, 1.3);
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
