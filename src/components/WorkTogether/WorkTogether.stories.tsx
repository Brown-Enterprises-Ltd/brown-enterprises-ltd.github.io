import React from 'react';
import WorkTogether from './WorkTogether';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'WorkTogether',
  decorators: [withKnobs],
};

export const workTogether = () => <WorkTogether />;
