import React from 'react';
import styled from 'styled-components';

interface BreadcrumbItem {
  text: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbContainer = styled.nav`
  display: flex;
  gap:10px;
  padding: 10px;
  margin-left: 10px;
`;

const BreadcrumbItemContainer = styled.div`
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <BreadcrumbItemContainer key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
          {index === items.length - 1 ? (
            item.text
          ) : (
            <a href={item.link}>{item.text}</a>
          )}
        </BreadcrumbItemContainer>
      ))}
    </BreadcrumbContainer>
  );
};
export default Breadcrumb;