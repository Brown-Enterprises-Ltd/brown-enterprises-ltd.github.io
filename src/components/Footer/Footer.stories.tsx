import React from 'react';
import Footer from './Footer';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Footer',
  decorators: [withKnobs],
};

export const footer = () => <Footer />;
