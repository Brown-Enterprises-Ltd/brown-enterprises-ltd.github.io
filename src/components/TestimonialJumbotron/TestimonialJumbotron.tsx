import QuoteAuthor from '../QuoteAuthor/QuoteAuthor';
import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../Typography/Typography';

const TestimonialJumbotronContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 360px;
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
  max-width: 670px;
`;

const TestimonialJumbotron = () => (
  <TestimonialJumbotronContainer>
    <InnerContainer>
      <StyledTitle colour="#FFF">What do our customers say?</StyledTitle>
      <StyledQuote>
        &ldquo;Brown Enterprises brought all of their experience with frontend engineering, UX, and
        project planning to our team, which helped us to hone our requirements. They also ensured we
        followed best practices technically right from the start. This has already paid off in the
        ability we have to make changes and be flexible as requirements change, while keeping to our
        quality standards&rdquo;
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
