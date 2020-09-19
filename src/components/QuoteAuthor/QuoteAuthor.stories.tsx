import React from 'react';
import QuoteAuthor from './QuoteAuthor';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'QuoteAuthor',
  decorators: [withKnobs],
};

const StyledContainer = styled.div`
  background: #064469;
`;

export const quoteAuthor = () => (
  <StyledContainer>
    <QuoteAuthor
      authorName="Sam Stagg"
      jobTitle="CTO, Third Space Learning"
      imageSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFql3Pb4Qiucw/profile-displayphoto-shrink_800_800/0?e=1605744000&v=beta&t=Uv3DDCjoc_dYCB53ELA3TJUBReqKSKB7xFrBJOuL3LM"
    />
  </StyledContainer>
);
