import React from 'react';
import styled from 'styled-components';
import { footerLinksConatctUs, footerLinksDownloadApp, footerLinksLiveEvents, footerLinksMore, 
  footerLinksSocialMedia, footerLinksWisdomContent } from '../../Constant';

const FooterContainer = styled.footer`
  background-color: #0f172a;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.p`
  font-weight: 600;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface footerLinksI {
  text: string
  url: string
}

interface BoxI {
  footerLinks: footerLinksI[]
  title: string
}

const Box: React.FC<BoxI>= ({footerLinks, title}) => {
  
  return(
    <Container>
    <Title>{title}</Title>
    {footerLinks?.map((link:any, index:number) => (
      <FooterLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
        {link?.text}
      </FooterLink>
    ))}
  </Container>
  )
}

const Footer: React.FC = () => {

  return (
    <FooterContainer>
     <Box footerLinks={footerLinksLiveEvents} title='LIVE EVENTS' />
     <Box footerLinks={footerLinksWisdomContent} title='WISDOM CONTENT' />
     <Box footerLinks={footerLinksMore} title='MORE' />
     <Box footerLinks={footerLinksSocialMedia} title='SOCIAL MEDIA' />
     <Box footerLinks={footerLinksDownloadApp} title='DOWNLOAD APP' />
     <Box footerLinks={footerLinksConatctUs} title='CONTACT US' />
    </FooterContainer>
  );
};

export default Footer;