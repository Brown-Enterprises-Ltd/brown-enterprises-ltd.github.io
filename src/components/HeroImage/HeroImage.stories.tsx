import React from 'react';
import HeroImage from './HeroImage';
import { withKnobs } from '@storybook/addon-knobs';
import StAlbansImage from './st-albans.jpg';

export default {
  title: 'HeroImage',
  decorators: [withKnobs],
};

export const heroImage = () => <HeroImage image={StAlbansImage} />;
