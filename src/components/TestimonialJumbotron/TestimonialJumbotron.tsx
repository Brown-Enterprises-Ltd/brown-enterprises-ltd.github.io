import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../Typography/Typography';

const TestimonialJumbotronContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 385px;
  background: #064469;
`;

const TestimonialJumbotron = () => (
  <TestimonialJumbotronContainer>
    <StyledTitle colour="#FFF">What do our customers say?</StyledTitle>
  </TestimonialJumbotronContainer>
);

export default TestimonialJumbotron;
