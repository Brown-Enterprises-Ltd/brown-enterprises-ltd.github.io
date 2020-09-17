import React from 'react';
import Header from './Header';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Header',
  decorators: [withKnobs],
};

export const header = () => <Header />;
