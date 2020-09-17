import React from 'react';
import SplitJumbotron from './SplitJumbotron';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'SplitJumbotron',
  decorators: [withKnobs],
};

export const splitJumbotron = () => <SplitJumbotron />;
