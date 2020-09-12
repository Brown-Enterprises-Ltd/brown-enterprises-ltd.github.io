import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from 'components/Typography/Typography';

const WorkTogetherJumbotronContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 385px;
  background: #FFF;
`;

const WorkTogether = () => (
  <WorkTogetherJumbotronContainer>
    <StyledTitle colour="#272932">Lets work together</StyledTitle>
  </WorkTogetherJumbotronContainer>
);

export default WorkTogether;
