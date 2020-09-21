import React from 'react';
import CTAJumbotron from './CTAJumbotron';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'CTAJumbotron',
  decorators: [withKnobs],
};

export const workTogether = () => (
  <CTAJumbotron
    title="Lets work together"
    body="We work with great companies to build great products, teams and cultures"
    buttons={[{ label: 'Get in touch', href: '/' }]}
  />
);

export const getInTouch = () => (
  <CTAJumbotron
    title="Get in touch"
    body="With Brown Enterprises you always have a direct line and can always expect a response with 24 hours"
    buttons={[
      { label: '+447711815264', href: 'tel: +447711815264' },
      { label: 'danny@brown.enterprises', href: 'mailto:danny@brown.enterprises' },
    ]}
  />
);
