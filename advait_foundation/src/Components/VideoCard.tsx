import React from 'react';
import styled from 'styled-components';
import { convertDecimalToTime } from '../utils';

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 10px;
  color: #58555b;
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #58555b;
`;

const MicroDetail = styled.div`
  font-size: 12px;
  color: #58555b;
`;

const TabBox = styled.div`
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  background-color: #282A35;
  color: white;
  position: relative;
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #d24115;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
`;

const Tab = styled.div`
  font-size: 12px;
`;

interface CardProps {
  details: any;
  index: number
}

const VideoCard: React.FC<CardProps> = ({ details, index }) => {
  
  return (
    <CardContainer>
      <Tab>भाग {index}</Tab>
      <DetailBox>
        <Title>{details?.title}</Title>
        <SubTitle>{details?.subtitle}</SubTitle>
        <MicroDetail>{convertDecimalToTime(details?.courseHours)}</MicroDetail>
        <Box><MicroDetail>Contribution:{details?.amount}</MicroDetail><MicroDetail>{details?.originalAmount}</MicroDetail></Box>
      </DetailBox>
      <TabBox>Hindi</TabBox>
      <Text><>Add to cart</> | <>Enroll</></Text>
      <hr className="solid"/>
    </CardContainer>
  );
};

export default VideoCard;