import QuoteAuthor from 'components/QuoteAuthor/QuoteAuthor';
import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../Typography/Typography';

const TestimonialJumbotronContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: #064469;
  padding: 40px 0px;
`;

const StyledQuote = styled.p`
  font-family: Secular One;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #fff;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  max-width: 670px;
`;

const TestimonialJumbotron = () => (
  <TestimonialJumbotronContainer>
    <InnerContainer>
      <StyledTitle colour="#FFF">What do our customers say?</StyledTitle>
      <StyledQuote>
        &ldquo;Brown Enterprises built our tutor console on-time and on budget all whilst also
        helping us improve our internal development processes&rdquo;
      </StyledQuote>
      <QuoteAuthor
        authorName="Sam Stagg"
        jobTitle="CTO, Third Space Learning"
        imageSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFql3Pb4Qiucw/profile-displayphoto-shrink_800_800/0?e=1605744000&v=beta&t=Uv3DDCjoc_dYCB53ELA3TJUBReqKSKB7xFrBJOuL3LM"
      />
    </InnerContainer>
  </TestimonialJumbotronContainer>
);

export default TestimonialJumbotron;
