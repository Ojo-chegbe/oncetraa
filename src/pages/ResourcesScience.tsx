import React from 'react';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';

const ResourcesScience = () => {
  return (
    <>
      <TextSection 
        headline="What Does the Science Actually Say?"
        subHeadline="At Oncetra, we believe in the potential of plant-based medicine — and we believe in telling the truth about where the evidence is strong, where it is promising but preliminary, and where it is still unclear."
        bgWhite={false}
      >
        <h3 className="text-[#222222] text-2xl font-bold mb-2">Our Approach to Evidence</h3>
        <p>
          We use three categories when discussing the science behind our plant portfolio.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><span className="font-bold">Established evidence</span> refers to findings that have been replicated across multiple well-designed studies in both laboratory settings and, where available, clinical trials.</li>
            <li><span className="font-bold">Promising but preliminary</span> refers to findings from laboratory and animal studies that have not yet been fully replicated in human clinical trials.</li>
            <li><span className="font-bold">Emerging</span> refers to early-stage research that warrants attention but should not yet be the basis for health decisions.</li>
        </ul>
      </TextSection>

      <GridSection 
        bgWhite={true}
        cards={[
          {
            title: "Soursop — Annona muricata",
            description: "What the research shows: Soursop leaves and seeds contain compounds called annonaceous acetogenins. These have shown selective cytotoxic activity in laboratory studies against breast, lung, colon, and prostate cancer cell lines.\n\nWhat the research does not yet show: No large-scale human clinical trials have confirmed these effects in people. Oncetra does not claim soursop cures or treats cancer.\n\nOur position: The evidence is promising and the biological mechanism is scientifically interesting. We believe in investing in this research, not overselling it."
          },
          {
            title: "Ginger — Zingiber officinale",
            description: "Gingerols and shogaols, the active compounds in ginger, have demonstrated anti-inflammatory and antioxidant activity in multiple studies. Research has also explored their potential to reduce nausea in chemotherapy patients — an application with reasonably strong clinical evidence. Studies into ginger's direct anticancer properties are at the promising-but-preliminary stage."
          },
          {
            title: "Garlic — Allium sativum",
            description: "Epidemiological studies have associated higher garlic consumption with reduced incidence of gastric and colorectal cancers. Laboratory studies have explored allicin's antiproliferative effects on cancer cells. The findings are encouraging and the research is ongoing. Clinical confirmation in humans remains limited."
          },
          {
            title: "Cashew — Anacardium occidentale",
            description: "Anacardic acid from cashew has shown antiproliferative effects against certain cancer cell lines in laboratory studies. This is early-stage research. We include cashew in our future pipeline because the initial findings are scientifically interesting and because it is a plant deeply familiar to African communities."
          }
        ]}
      />

      <TextSection bgWhite={false}>
        <h3 className="text-[#222222] text-2xl font-bold mb-4">How to Read a Study About Plant Medicine</h3>
        <p>When you encounter a headline claiming a plant cures cancer, ask these questions:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Was this a laboratory study using cell lines, or was it a study in humans? Cell line studies are a necessary early step, but they do not confirm clinical benefit.</li>
            <li>How large was the study? A finding in 50 patients is very different from a finding in 5,000.</li>
            <li>Was it peer-reviewed and published in a reputable journal?</li>
            <li>Who funded it, and could that funding create bias?</li>
            <li>Has it been replicated by other researchers?</li>
        </ul>
        <p className="mt-4 italic">Good science is slow, cautious, and self-correcting. We try to be the same.</p>
      </TextSection>

      <TextSection bgWhite={true}>
        <h3 className="text-[#222222] text-2xl font-bold mb-4">An Important Note</h3>
        <p>
          Nothing on this page constitutes medical advice. If you have cancer or suspect you might, please consult a qualified healthcare provider. Plant-based products are not a substitute for diagnosis and conventional medical treatment. They may, in specific and evidence-backed ways, support your overall health and complement the care you receive. The distinction matters.
        </p>
      </TextSection>
    </>
  );
};

export default ResourcesScience;
