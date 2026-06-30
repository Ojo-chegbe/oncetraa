import React from 'react';
import HeroSection from '../components/HeroSection';
import SplitSection from '../components/SplitSection';
import ScrollReveal from '../components/ScrollReveal';

// Custom Status Badge Component
const StatusBadge = ({ status, type }: { status: string, type: 'active' | 'development' | 'cultivation' | 'expansion' }) => {
  const styles = {
    active: "bg-green-100 text-green-800 border-green-200",
    development: "bg-gray-100 text-gray-800 border-gray-200",
    cultivation: "bg-emerald-100 text-emerald-800 border-emerald-200",
    expansion: "bg-blue-100 text-blue-800 border-blue-200"
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[13px] font-bold border mb-4 ${styles[type]}`}>
      {status}
    </span>
  );
};

const Products = () => {
  return (
    <>
      <HeroSection 
        headline={"From Seed to Solution.\nFrom Test to Treatment."}
        subHeadline={"Oncetra's product and service pipeline addresses cancer at every stage. We are building each part of this pipeline with the same rigour and the same commitment to affordability and access."}
        bgImage="/home/banner.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <SplitSection
          headline="The Soursop Range"
          imageSrc="/home/first_step.png"
          bgWhite={true}
        >
          <StatusBadge status="Phase One — In Cultivation" type="cultivation" />
          <p>
            Our flagship natural therapeutic initiative. Our pilot project is currently cultivating 1,000 soursop trees under strict agricultural standards to ensure maximum phytochemical yield.
          </p>
          <p>
            Within two years, we will begin processing and producing a certified soursop product line. This will include standardized leaf extracts, targeted tea blends, and cold-pressed juice. Every product will be fully traceable from our African farms to the final formulation, guaranteeing purity and potency.
          </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Medicinal Plant Portfolio"
          imageOnRight={true}
          imageSrc="/home/nature_science.png"
          bgWhite={false}
        >
          <StatusBadge status="Phase Two — Expansion Phase" type="expansion" />
          <p>
            Nature's pharmacy extends far beyond a single plant. As our cultivation and extraction capacities grow, we will expand our portfolio to target different biological pathways involved in cancer progression and inflammation.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
            <li><strong>Ginger Extract:</strong> Standardised for gingerol and shogaol content to combat inflammation.</li>
            <li><strong>Garlic Formulations:</strong> Allicin-standardised supplements designed for optimal bioavailability.</li>
            <li><strong>Cashew Leaf Extracts:</strong> Harnessing anacardic acid for its researched antiproliferative properties.</li>
          </ul>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="Diagnostic Access Programs"
          imageSrc="/home/partner_clinical.png"
          bgWhite={true}
        >
          <StatusBadge status="Status: Active" type="active" />
          <p>
            Treatment is only as effective as the diagnosis that precedes it. Through our growing network of partner laboratories and clinics across the continent, we actively facilitate access to early screening.
          </p>
          <p>
            Our active programs include subsidised PAP smear testing for cervical cancer, PSA blood testing for prostate cancer, and comprehensive HPV vaccination rollouts. We don't just provide the test; we ensure patients are referred into our ecosystem for counselling and care immediately upon receiving their results.
          </p>
        </SplitSection>
      </ScrollReveal>

      <ScrollReveal>
        <SplitSection
          headline="The Oncetra Pharmacy"
          imageOnRight={true}
          imageSrc="/home/treatment.png"
          bgWhite={false}
        >
          <StatusBadge status="In Development — Expected Year Three" type="development" />
          <p>
            The future of our clinical integration. We are developing a dedicated, specialist pharmacy designed exclusively for cancer patients.
          </p>
          <p>
            This will serve as a trusted hub for affordable, verified oncology medications alongside our natural, science-backed complementary products. The pharmacy will feature built-in patient education, side-effect management counselling, and seamless integration with our hospital partner network to ensure no patient navigates their treatment journey alone.
          </p>
        </SplitSection>
      </ScrollReveal>
    </>
  );
};

export default Products;
