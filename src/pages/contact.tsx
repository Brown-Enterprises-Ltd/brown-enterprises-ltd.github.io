import React from 'react';
import StAlbansImage from 'components/HeroImage/st-albans.jpg';
import ContactUs from 'components/ContactUs/ContactUs';
import HeroImage from 'components/HeroImage/HeroImage';

export default () => (
  <>
    <HeroImage image={StAlbansImage} />
    <ContactUs />
  </>
);
