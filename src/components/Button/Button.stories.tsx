import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const button = () => (
  <Button to={text('URL', 'https://brown.enterprises')}>{text('Label', 'Get in touch')}</Button>
);
