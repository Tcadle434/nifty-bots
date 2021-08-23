import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";

const RoadmapContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0
`;


export function RoadmapSection(props) {
  return (
    <RoadmapContainer name="roadmapSection">
      <SectionTitle> Here's the Plan </SectionTitle>
    </RoadmapContainer>

  );

}
