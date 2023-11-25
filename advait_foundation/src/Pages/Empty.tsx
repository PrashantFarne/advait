import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    border: 2px solid #c2c2c2;
    border-radius: 5px;
    font-weight: 600;
`;

const Empty: React.FC = () => {

  return (
    <Container>
      Sorry, This page is not in Task, I will complete this after joining the organization. Thanks for code review!
    </Container>
  );
};

export default Empty;