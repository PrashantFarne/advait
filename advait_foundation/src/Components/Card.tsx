import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 4px;
`;

const SubHeading = styled.div`
  color: #58555b;
  font-size: 12px;
`;

interface CardProps {
  details: any;
  index: number
}

const ResponsiveImage = styled.img`
  max-width: 100%;
  font-weight: 600;
  border-radius: 5px;
  height: auto;
  margin-right: 16px;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const ImageComponent: React.FC<any> = ({ imageObject }) => {
  const { domain, basePath, key } = imageObject;
  const imageUrl = `${domain}/${basePath}/10/${key}`;

  return (
    <>
      <ResponsiveImage src={imageUrl} alt="Your Alt Text" />
    </>
  );
};


const Card: React.FC<CardProps> = ({ details }) => {
  console.log(details, 'ksjhdh'); 
  return (
    <CardContainer>
      {details &&
      <ImageComponent imageObject={details?.thumbnail} />}

      <DetailBox>
        <Title>{details?.title}</Title>
        <SubHeading>{details?.subtitle}</SubHeading>
        <SubHeading>{details?.coursesCount} Video Series</SubHeading>
      </DetailBox>
    </CardContainer>
  );
};

export default Card;