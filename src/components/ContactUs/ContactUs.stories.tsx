import React from 'react';
import ContactUs from './ContactUs';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'ContactUs',
  decorators: [withKnobs],
};

export const contactUs = () => <ContactUs />;
