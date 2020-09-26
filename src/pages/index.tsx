import React from 'react';
import SplitJumbotron from 'components/SplitJumbotron/SplitJumbotron';
import TestimonialJumbotron from 'components/TestimonialJumbotron/TestimonialJumbotron';
import CTAJumbotron from 'components/WorkTogether/CTAJumbotron';

export default () => (
  <>
    <SplitJumbotron />
    <TestimonialJumbotron />
    <CTAJumbotron
      title="Lets work together"
      body="We work with great companies to build great products, teams and cultures"
      buttons={[{ label: 'Get in touch', href: '/contact' }]}
    />
  </>
);
