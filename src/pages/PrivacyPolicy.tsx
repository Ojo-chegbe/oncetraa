import React from 'react';
import SEO from '../components/SEO';
import TextSection from '../components/TextSection';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-12">
      <SEO 
        title="Privacy Policy | Oncetra"
        description="Oncetra's privacy policy regarding data collection and usage."
      />
      <TextSection 
        headline="Privacy Policy"
        bgWhite={true}
      >
        <p>
          Oncetra collects only the information you choose to provide us through our contact forms and newsletter. We do not sell your data to third parties.
        </p>
        <p className="mt-4">
          We use your information solely to respond to your enquiry or to send you the updates you have requested. You may unsubscribe or request deletion of your information at any time by contacting us at privacy@oncetra.com. 
        </p>
        <p className="mt-4">
          A full privacy policy is available on request.
        </p>
      </TextSection>
    </div>
  );
};

export default PrivacyPolicy;
