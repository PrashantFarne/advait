import React from 'react';
import styled from 'styled-components';
import MenuItem from '../../Components/Menu';
import { links } from '../../Constant';

const HeaderContainer = styled.div`
  background-color: #d24115;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  margin-left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  font-family: ui-sans-serif,system-ui;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 30px;
  height:30px;
`;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <HeaderContainer>
      <Nav>
        <Logo><Image src="/image.jpg" alt="image" /></Logo>
        {links.map((link, index) => (
          <NavLink key={index} href={link.url}>
            {link.text}
          </NavLink>
        ))}
      </Nav>
      <MenuItem />
    </HeaderContainer>
  );
};

export default Header;