import React from 'react';
import TestimonialJumbotron from './TestimonialJumbotron';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'TestimonialJumbotron',
  decorators: [withKnobs],
};

export const testimonialJumbotron = () => <TestimonialJumbotron />;
