import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


const RoadmapContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.primary};

  border-radius: 40px;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};


  @media screen and (max-width: 480px) {
    height: 150px;
    width: 280px;
    align-items: center;
  }
`;

const RoadmapImg = styled.img`
  width: 5em;
  height: 5em;
  align-items: center;

`;

export function OurRoadmap(props) {
const { imgUrl} = props;

  return (
    <RoadmapImg src={imgUrl} />

  );

}
