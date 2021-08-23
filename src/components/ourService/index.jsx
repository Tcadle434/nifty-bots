import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 2em;

  @media screen and (max-width: 480px) {
  justify-content: center;
  flex-direction: column;
}

`;

const ServiceImg = styled.img`
  width: 45em;
  height: 30em;

  @media screen and (max-width: 480px) {
  width: 20em;
  height: 13em;
}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

`;


const Details = styled.p`
  color: #000000;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  max-width: 50%;

  @media screen and (max-width: 480px) {
    max-width: 90%;
    width: 100%;
    font-size: 14px;
}
`;

export function OurService(props) {
const { imgUrl, description, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
        <DescriptionContainer>
          <Details> {description} </Details>
        </DescriptionContainer>
        <ServiceImg src={imgUrl} />
    </ServiceContainer>

  );

}
