import React from "react";
import styled from "styled-components/macro";
import { ImPencil2 } from "react-icons/im";
import { GiToken, GiVote, GiReceiveMoney, GiBrain } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";

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

const PencilImg = styled(ImPencil2)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

const TokenImg = styled(GiToken)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

const AvatarImg = styled(BsPersonFill)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

const VoteImg = styled(GiVote)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

const MintImg = styled(GiReceiveMoney)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

const BrainImg = styled(GiBrain)`
  color: #FFFFFF!important;
  height: 4em;
  width: 4em;
  padding-top: 15px;
`;

export function OurFeaturePen(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <PencilImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}

export function OurFeatureToken(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <TokenImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}

export function OurFeatureAvatar(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <AvatarImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}

export function OurFeatureVoice(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <VoteImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}

export function OurFeaturePrice(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <MintImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}

export function OurFeatureBrain(props) {
const { description } = props;

  return (
        <FeatureContainer>
        <BrainImg />
        <Details> {description} </Details>
        </FeatureContainer>
  );

}
