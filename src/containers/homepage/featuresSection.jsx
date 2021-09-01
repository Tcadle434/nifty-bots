import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurFeature } from "../../components/ourFeature";

import Feature1Img from "../../assets/illustrations/snip-penc.PNG";

const FeaturesContainer = styled(Element)`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.primary};
  padding: 10px; 0

  @media screen and (max-width: 480px) {
  width: 100%;
  min-height: 1000px;
  align-items: center;
}
`;

const FeatureContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: "row";

  @media screen and (max-width: 480px) {
  display: block;
  align-items: center;
  margin-bottom: -20px;
}
`;

export function FeaturesSection(props) {
  return (

    <FeaturesContainer name="featuresSection">
    <SectionTitle> Features </SectionTitle>
      <FeatureContainerRow>
        <OurFeature
          description="Each Anti Social Bot and attribute was drawn by hand before being programmatically combined"
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="Purchase of a Bot gives you access to the A.S.R.C and complete ownership over the token"
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="Awesome avatars to use as PFPs for your metaverse identity"
          imgUrl={Feature1Img}
        />
      </FeatureContainerRow>


      <FeatureContainerRow>
        <OurFeature
          description="Community driven. Have a say in the development of the game and future A.S.R.C decisions"
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="Cheap mint cost. All Anti Social Bots will be three SOL on drop to give everyone a fair chance"
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="Dedicated and active developers who are excited to explore the depths of the SOL blockchain"
          imgUrl={Feature1Img}
        />
      </FeatureContainerRow>

    </FeaturesContainer>

  );

}
