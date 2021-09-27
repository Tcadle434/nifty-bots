import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurFeaturePen, OurFeatureToken, OurFeatureAvatar, OurFeatureVoice, OurFeaturePrice, OurFeatureBrain } from "../../components/ourFeature";


import Feature1Img from "../../assets/illustrations/snip-penc.PNG";

import { ImPencil2 } from "react-icons/im";

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

const PencilImg = styled(ImPencil2)`
  color: #FFFFFF!important;
`;

export function FeaturesSection(props) {
  return (

    <FeaturesContainer name="featuresSection">
    <SectionTitle> Features </SectionTitle>
      <FeatureContainerRow>
        <OurFeaturePen
          description="Each Anti Social Bot and attribute was drawn by hand before being programmatically combined"
        />
       <OurFeatureToken
          description="Purchase of a Bot gives you access to the A.S.R.C and complete ownership over the token"
        />
      <OurFeatureAvatar
          description="Awesome avatars to use as PFPs for your metaverse identity"
        />
      </FeatureContainerRow>


      <FeatureContainerRow>
        <OurFeatureVoice
          description="Community driven. Have a say in the development of the game and future A.S.R.C decisions"
        />
      <OurFeaturePrice
          description="Cheap mint cost. All Anti Social Bots will be 1 SOL on drop to give everyone a fair chance"
        />
      <OurFeatureBrain
          description="Dedicated and active developers who are excited to explore the depths of the SOL blockchain"
        />
      </FeatureContainerRow>
    </FeaturesContainer>

  );

}
