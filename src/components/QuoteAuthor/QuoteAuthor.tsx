import { StyledSubtitle } from '../Typography/Typography';
import React from 'react';
import styled from 'styled-components';

interface IQuoteAuthorProps {
  authorName: string;
  jobTitle: string;
  imageSrc: string;
}

const QuoteAuthorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledAuthorImage = styled.img`
  border-radius: 100%;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 1000px;
  width: 78px;
  height: 78px;
`;

const StyledAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20px;
`;

const QuoteAuthor = ({ authorName, jobTitle, imageSrc }: IQuoteAuthorProps) => (
  <QuoteAuthorContainer>
    <StyledAuthorDetails>
      <StyledSubtitle colour="#FFF">{authorName}</StyledSubtitle>
      <StyledSubtitle colour="#FFF">{jobTitle}</StyledSubtitle>
    </StyledAuthorDetails>
    <StyledAuthorImage src={imageSrc} alt={authorName} />
  </QuoteAuthorContainer>
);

export default QuoteAuthor;
