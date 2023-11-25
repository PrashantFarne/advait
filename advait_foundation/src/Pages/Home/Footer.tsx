import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  const footerLinks = [
    { text: 'LIVE EVENTS', url: '#' },
    { text: 'Bhagavad Gita', url: '#' },
    { text: 'Sant Sarita', url: '#' },
    { text: 'Vedant Samhita', url: '#' },
    { text: 'Bodh Pratyusha', url: '#' },
    { text: 'WISDOM CONTENT', url: '#' },
    { text: 'Video Series', url: '#' },
    { text: 'AP Books', url: '#' },
    { text: 'AP Articles', url: '#' },
    { text: 'AP Circle', url: '#' },
    { text: 'MORE', url: '#' },
    { text: 'About Acharya Prashant', url: '#' },
    { text: 'Invite Him', url: '#' },
    { text: 'Interview Him', url: '#' },
    { text: 'Ghar Ghar Upanishad', url: '#' },
    { text: 'Media and Public Interaction', url: '#' },
    { text: 'SOCIAL MEDIA', url: '#' },
    { text: 'For English', url: '#' },
    { text: 'For Hindi', url: '#' },
    { text: 'DOWNLOAD ACHARYA PRASHANT APP', url: '#' },
    { text: 'Get it on Google Play', url: '#' },
    { text: 'Download on the App Store', url: '#' },
    { text: 'CONTACT US', url: '#' },
    { text: 'support@advait.org.in', url: 'mailto:support@advait.org.in' },
    { text: '+91 9650585100', url: 'tel:+919650585100' },
    { text: '+91 9650585100', url: 'tel:+919650585100' },
    { text: '11, R-5/119, Raj Nagar, Sec. - 5, Ghaziabad, U.P. | PIN: 201002', url: '#' },
  ];

  return (
    <FooterContainer>
      {footerLinks.map((link, index) => (
        <FooterLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </FooterLink>
      ))}
    </FooterContainer>
  );
};

export default Footer;