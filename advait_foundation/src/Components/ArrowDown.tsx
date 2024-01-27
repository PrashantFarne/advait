import React, { useState } from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  transition: transform 0.3s ease;
`;

const TextContainer = styled.div`
  margin-top: 10px;
`;

interface ExpandableTextProps {
  initialText: string;
  expandedText: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ initialText, expandedText }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      <ArrowContainer onClick={() => setExpanded(!isExpanded)}>
        <ArrowIcon style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </ArrowContainer>
      <TextContainer>
        {isExpanded ? expandedText : initialText}
      </TextContainer>
    </div>
  );
};

export default ExpandableText;