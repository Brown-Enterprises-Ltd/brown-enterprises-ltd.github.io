import React from 'react';
import styled from 'styled-components';
import { StyledSubtitle, StyledTitle } from 'components/Typography/Typography';
import Button from 'components/Button/Button';

const WorkTogetherJumbotronContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 385px;
  background: #FFF;
`;

const WorkTogether = () => (
  <WorkTogetherJumbotronContainer>
    <StyledTitle colour="#272932">Lets work together</StyledTitle>
    <StyledSubtitle colour="#272932">We work with great companies to build great products, teams and cultures</StyledSubtitle>
    <Button to="/">Get in touch</Button>
  </WorkTogetherJumbotronContainer>
);

export default WorkTogether;
