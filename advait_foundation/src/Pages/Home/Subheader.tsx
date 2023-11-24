import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #1e293b;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  height: 28px;
  color: #fff;
  background-color: #1e293b;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  color: #fff;
  background-color: #1e293b;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border: 2px solid #fff;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;

interface HeaderProps {
  title?: string;
}

const Subheader: React.FC<HeaderProps> = () => {
    
  return (
    <HeaderContainer>
      <Container>
        <Circle className="dot"></Circle>
        <div>Get access to all 350+ video series at once!</div>
        <Button>Click Here!</Button>
      </Container>
    </HeaderContainer>
  );
};

export default Subheader;