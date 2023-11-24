import React from 'react';
import styled from 'styled-components';
import { useData } from '../DataProvider';

const Container = styled.div`
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  min-width: 600px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-left: 20px;
`;

const ContainerBox = styled.div`
  max-width:600px; //responsive
`;

const Title = styled.div`
  font-weight: 600;
`;

const Question = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.8s ease-in-out;
  background-color: #ecf0f1;
  border-bottom: 1px solid #bdc3c7;
`;

const SubTitle = styled.div`
`;

const HeadingBox = styled.div`
  width: 400px;
`;

interface QAItemProps {
  question: string;
  answer: string;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Question onClick={() => setIsOpen(!isOpen)}>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </Container>
  );
};

const FAQ: React.FC = () => {
  const { data } = useData();

  return (
    <Box>
      <HeadingBox>
      <Title>FAQ</Title>
      <SubTitle>Can’t find the answer you’re looking for? Reach out to our support team.</SubTitle>
      </HeadingBox>
      <ContainerBox>
        {data?.faq?.map((item:any, index:number) => (
          <QAItem key={index} question={item?.question} answer={item?.answer} />
        ))}
      </ContainerBox>
    </Box>
  );
};

export default FAQ;