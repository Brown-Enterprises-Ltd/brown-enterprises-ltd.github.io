import React from 'react';
import styled from 'styled-components';
import Pill from './Pill';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Pill',
  decorators: [withKnobs],
};

const StyledContainer = styled.div`
  background: #064469;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

export const pill = () => (
  <StyledContainer>
    <Pill colour="#07A27C" label="UX" />
    <Pill colour="#064469" label="Frontend" />
    <Pill colour="#E34429" label="Backend" />
    <Pill colour="#F2BD1D" label="AWS" />
  </StyledContainer>
);
