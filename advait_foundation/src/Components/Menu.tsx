import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const MenuItemContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-200px')};
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  transition: right 0.3s ease;
`;

const MenuItem: React.FC = () => {
  const [isOpen] = useState(false);

  return (
    <Container>
      <MenuItemContainer isOpen={isOpen}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </MenuItemContainer>
    </Container>
  );
};

export default MenuItem;