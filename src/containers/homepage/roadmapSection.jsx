import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Element } from "react-scroll";
import { Marginer } from "../../components/marginer";
import { SectionTitle } from "../../components/sectionTitle";
import { OurRoadmap } from "../../components/roadmap";
import Bounce from 'react-reveal/Bounce';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Feature1Img from "../../assets/illustrations/snip-penc.PNG";
import FirstBotRight from "../../assets/illustrations/boxing_sample_rotate_20.png";
import FirstBotLeft from "../../assets/illustrations/boxing_sample_rotate_negative_20.png";
import { GrMoney } from "react-icons/gr";
import { FaRobot, FaGem, FaTshirt } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiToyMallet } from "react-icons/gi";

const RoadmapContainer = styled(Element)`
  width: 100%;
  min-height: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  padding: 10px; 0

`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 20px;
    background-color: ${theme.primary}!important;
    box-shadow: none!important;
  }

  .vertical-timeline-element-icon svg {

`;


const DetailsHeader = styled.h3`
  font-family: SF TransRobotics;
  font-weight: 400;
  font-size: 26px;

    @media screen and (max-width: 480px) {

    }
`;

const Details = styled.p`
  font-family: Disposable Droid BB;
  font-size: 20px!important;

    @media screen and (max-width: 480px) {

    }
`;

const RobotRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RobotImgLeft = styled.img`
  width: 11em;
  height: 15em;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 3em;
    height: 4em;
  }

`;
const RobotImgRight = styled.img`
  width: 12em;
  height: 15em;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 5em;
    height: 7em;
  }

`;

const RobotImg = styled(FaRobot)`
  color: #000000!important;
`;

const MoneyImg = styled(GrMoney)`
`;

const RareImg = styled(FaGem)`
  color: #000000!important;
`;

const MerchImg = styled(FaTshirt)`
  color: #000000!important;
`;

const GameImg = styled(IoLogoGameControllerB)`
  color: #000000!important;
`;

const VoteImg = styled(GiToyMallet)`
  color: #000000!important;
`;

export function RoadmapSection(props) {
  return (
    <RoadmapContainer name="roadmapSection">
      <SectionTitle> Here's the Plan </SectionTitle>

      <VerticalTimeline>
        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<RobotImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Bots, Roll Out</DetailsHeader>
          <Details>
            In late September the Anti Social Bots will be available to mint through our website
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<MoneyImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Rewards</DetailsHeader>
          <Details>
            Throughout the mint, there will be several SOCIAL bots in the mix who are outliers. If purchased, you will be sent 10 SOL
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<RareImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Rarities Released</DetailsHeader>
          <Details>
             The site will be updated to showcase all attributes and their associated rarity value
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<MerchImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Merch Drop</DetailsHeader>
          <Details>
            Giveaways and contests will be held to decide who will receive free A.S.R.C merch
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<GameImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">Game Development</DetailsHeader>
          <Details>
            After the mint, we will use the funds to revamp our site to handle a full Play-To-Earn battle-based game
          </Details>
        </StyledVerticalTimelineElement>

        <StyledVerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#16B1F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid', color: '#16B1F3' }}
          iconStyle={{ background: '#16B1F3', color: '#fff' }}
          icon={<VoteImg />}
        >
          <DetailsHeader className="vertical-timeline-element-title">You Tell Us</DetailsHeader>
          <Details>
            As a member of the A.S.R.C your voice matters. Help lead this group of insociable shells to a bright future
          </Details>
        </StyledVerticalTimelineElement>

      </VerticalTimeline>

      <RobotRow>
          <RobotImgLeft src={FirstBotRight} />
          <RobotImgRight src={FirstBotLeft} />
          <RobotImgLeft src={FirstBotRight} />
          <RobotImgRight src={FirstBotLeft} />
          <RobotImgLeft src={FirstBotRight} />
          <RobotImgRight src={FirstBotLeft} />
      </RobotRow>

    </RoadmapContainer>

  );

}
