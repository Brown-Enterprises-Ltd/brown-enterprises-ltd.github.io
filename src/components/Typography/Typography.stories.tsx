import React from 'react';
import { StyledTitle, StyledSubtitle } from './Typography';
import { withKnobs, text, color } from '@storybook/addon-knobs';

export default {
  title: 'Typography',
  decorators: [withKnobs],
};

export const styledTitle = () => (
  <StyledTitle colour={color('Colour', '#272932')}>
    {text('Example text', 'This is a title')}
  </StyledTitle>
);

export const styledSubtitle = () => (
  <StyledSubtitle colour={color('Colour', '#272932')}>
    {text('Example text', 'This is a subtitle')}
  </StyledSubtitle>
);
