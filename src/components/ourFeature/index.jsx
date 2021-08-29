import React from "react";
import styled from "styled-components/macro";

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
  height: 250px;
  width: 350px;
  margin: 20px 20px;
  border-radius: 20px;

  @media screen and (max-width: 480px) {
    height: 180px;
    width: 280px;
    align-items: center;
  }
`;


const FeatureImg = styled.img`
  width: 5em;
  height: 5em;
  align-items: center;

`;


const Details = styled.p`
    display: flex;
    text-align: center;
    flex-direction: column;
    font-family: Disposable Droid BB;
    font-size: 24px;
    font-weight: normal;
    color: #FFFFFF;
    max-width: 85%;

    @media screen and (max-width: 480px) {
      font-size: 18px;
      font-weight: normal;
    }
`;


export function OurFeature(props) {
const { imgUrl, description } = props;

  return (
        <FeatureContainer>
        <FeatureImg src={imgUrl} />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}
