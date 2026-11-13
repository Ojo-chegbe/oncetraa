import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';
import VolunteerApplication from '../components/VolunteerApplication';

const GetInvolvedVolunteer = () => {
  return (
    <>
      <SEO
        title="Volunteer With Oncetra | Cancer Awareness & Community Support"
        description="Give your time to something that matters. Volunteer with Oncetra to support cancer awareness drives, translation, and community health events."
      />
      <HeroSection
        headline="Give Your Time to Something That Matters."
        subHeadline="Oncetra's work happens in communities — in fields where medicinal plants are grown, in clinics where screenings happen, in schools and meeting halls where awareness is built. Volunteers are the heartbeat of this effort."
        bgImage="/images/heroes/volunteer.webp"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="Where We Need Support"
          imageSrc="/impact/education_support.webp"
          bgWhite={true}
        >
          <p>
            We are currently looking for passionate individuals who can support our mission on the ground and digitally. Whether you have an hour a week or ten, your contribution matters.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 mb-6">
            <li><strong>Community Health Events:</strong> Support the logistics and coordination of local cancer awareness drives.</li>
            <li><strong>Translation & Localisation:</strong> Help us translate complex health education materials into local languages to maximize reach.</li>
            <li><strong>Screening Coordination:</strong> Assist with administrative tasks for our subsidized screening programs.</li>
            <li><strong>Professional Skills:</strong> Contribute pro-bono hours in research, communications, graphic design, or data science.</li>
          </ul>
          <a href="#apply" className="inline-flex items-center gap-3 text-[#277B50] font-semibold mt-3 hover:underline underline-offset-4">
            Apply to volunteer <span aria-hidden="true">↓</span>
          </a>
        </SplitSection>
      </ScrollReveal>

      <VolunteerApplication />
    </>
  );
};

export default GetInvolvedVolunteer;
