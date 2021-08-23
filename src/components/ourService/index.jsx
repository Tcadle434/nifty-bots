import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 2em;
`;

const ServiceImg = styled.img`
  width: 45em;
  height: 30em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;

`;


const Details = styled.p`
  color: #000000;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  max-width: 50%;
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
