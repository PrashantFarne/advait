import React, { useState } from 'react';
import styled from 'styled-components';
import { useData } from '../DataProvider';
import Breadcrumb from '../../Components/Breadscrums';

const HeaderContainer = styled.div`
  padding: 0.4rem;  
  border-bottom: 1px solid #c9c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Socialurl = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Heading = styled.div`
  margin-left: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  padding: 16px;
`;

const Container = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Text = styled.p`
  flex: 1;
`;

const Input = styled.input`
  width: 250px;
  border-radius: 5px;
  height: 30px;
  border: 0.5px solid #c9c4c4;
`;

const DescriptionBox = styled.p`
  display: flex;
  flex-direction: column;
`;

const DropdownContainer = styled.div`
  display: flex;
`;

const DropdownButton = styled.button`
  padding: 8px;
  background-color: #f0f0f0;
  color: #000;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #c9c4c4;
  border-radius: 5px;
`;

const DropdownMenu = styled.ul<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const LoginButton = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: #d24115;
  color: #fff;
  border: none;
  font-weight: 600;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

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

const SubTitle = styled.div`
  font-weight: 600;
`;

interface DropdownMenuProps {
  isOpen: boolean;
}

const ImageComponent: React.FC<any> = ({ imageObject }) => {
  const { domain, basePath, key } = imageObject;
  const imageUrl = `${domain}/${basePath}/10/${key}`;

  return (
    <>
      <ResponsiveImage src={imageUrl} alt="image" />
    </>
  );
};

const Introduction: React.FC = () => {
  const { data } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'संतवाणी', link: '/products' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
      <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>All</DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
      </DropdownContainer>
      <Input type='text' id='fname' name='fname' value='' />
      <LoginButton>Login</LoginButton>
      </HeaderContainer>
      <Breadcrumb items={breadcrumbItems} />

      <Heading>{data?.details?.details?.title}</Heading>
      <Container>
        {data?.details &&
      <ImageComponent imageObject={data?.details?.details?.thumbnail} />}

      <DescriptionBox>
      <SubTitle>{data?.details?.details?.subtitle}</SubTitle>
      <Text>{data?.details?.details?.description}</Text>
      </DescriptionBox>
      </Container>
      <Socialurl>
      </Socialurl>
    </>
  );
};

export default Introduction;