import React from "react";
import styled from "styled-components";
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
  background: rgba(22, 177, 243, 0.5);
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
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
      </FeatureContainerRow>


      <FeatureContainerRow>
        <OurFeature
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
        <OurFeature
          description="The Battle Bots and their attributes were drawn by hand."
          imgUrl={Feature1Img}
        />
      </FeatureContainerRow>

    </FeaturesContainer>

  );

}
