import React from 'react';
import StAlbansImage from 'components/HeroImage/st-albans.jpg';
// import ContactUs from 'components/ContactUs/ContactUs';
import HeroImage from 'components/HeroImage/HeroImage';
import CTAJumbotron from 'components/WorkTogether/CTAJumbotron';

export default () => (
  <>
    <HeroImage image={StAlbansImage} />
    <CTAJumbotron
      title="Get in touch"
      body="With Brown Enterprises you always have a direct line and can always expect a response with 24 hours"
      buttons={[
        { label: '+447711815264', href: 'tel: +447711815264' },
        { label: 'danny@brown.enterprises', href: 'mailto:danny@brown.enterprises' },
      ]}
    />
    {/* <ContactUs /> */}
  </>
);
