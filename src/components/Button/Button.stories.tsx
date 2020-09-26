import React from 'react';
import { LinkButton } from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const button = () => (
  <LinkButton to={text('URL', 'https://brown.enterprises')}>
    {text('Label', 'Get in touch')}
  </LinkButton>
);
