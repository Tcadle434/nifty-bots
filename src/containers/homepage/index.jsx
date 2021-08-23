import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { AboutSection } from "./aboutSection";
import { BotSection } from "./botSection";
import { FeaturesSection } from "./featuresSection";
import { RoadmapSection } from "./roadmapSection";
import { Marginer } from "../../components/marginer";


const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return(
      <PageContainer>
        <TopSection />
        <AboutSection />
        <BotSection />
        <FeaturesSection />
        <RoadmapSection />
      </PageContainer>
    );
}
