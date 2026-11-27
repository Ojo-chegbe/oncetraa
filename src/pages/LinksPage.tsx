import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { FiArrowRight, FiArrowUpRight, FiBookOpen, FiHeart, FiUsers } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595532660892', description: 'Community conversations and cancer education.', Icon: FaFacebookF },
  { name: 'Instagram', href: 'https://www.instagram.com/on_cetra/', description: 'Visual cancer awareness guides, carousels, and updates.', Icon: FaInstagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@oncetra', description: 'Quick health explainers and awareness videos.', Icon: FaTiktok },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCY47aWAo7ify9gmq5o_iH3A', description: 'Educational videos and expert insights.', Icon: FaYoutube },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/oncetra/', description: 'Research, partnerships, and organisational updates.', Icon: FaLinkedinIn },
  { name: 'X', href: 'https://x.com/Oncetra_org', description: 'Public health insights, news, and awareness.', Icon: SiX },
];

const resources = [
  { title: 'Explore Cancer Awareness Resources', text: 'Understand cancer risks, prevention, early warning signs, and informed health decisions.', href: '/resources/cancer-awareness', Icon: FiBookOpen, action: 'Explore resources' },
  { title: 'Volunteer With Oncetra', text: 'Use your skills and your voice to support cancer awareness and community initiatives.', href: '/get-involved/volunteer', Icon: FiHeart, action: 'Get involved' },
  { title: 'Partner With Us', text: 'Explore opportunities to collaborate on research, healthcare, and community impact.', href: '/get-involved/partner', Icon: FiUsers, action: 'Explore partnership' },
];

export default function LinksPage() {
  return (
    <>
      <SEO
        title="Connect With Oncetra | Official Social Media & Resources"
        description="Follow Oncetra on social media, explore cancer awareness resources, and connect with our research, prevention, and community initiatives in Africa."
        canonicalUrl="https://www.oncetra.org/links"
      />
      <HeroSection
        headline="Rewriting the Story of Cancer Care in Africa."
        subHeadline="Stay connected with our work in cancer awareness, prevention, research, and community action."
        bgImage="/images/heroes/contact.webp"
        showRightContent={false}
        compact
      />

      <section aria-labelledby="connect-heading" className="bg-white px-6 py-12 text-[#122922] md:px-12 md:py-16 lg:px-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 id="connect-heading" className="text-3xl font-bold leading-tight md:text-4xl">Connect With Us</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-[#59645d]">Follow our work, discover educational content, and join the conversation.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {socials.map(({ name, href, description, Icon }) => (
              <li key={name} className="min-w-0">
                <a
                  href={href} target="_blank" rel="noopener noreferrer"
                  className="flex h-full min-h-[102px] items-center gap-3 rounded-[24px] border border-[#e1eae3] bg-[#f7faf7] p-4 transition-colors hover:border-[#97c6a8] hover:bg-[#edf6ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#277B50] sm:gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e6f2e9] text-[#277B50]">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold">{name}<span className="sr-only"> (opens in a new tab)</span></span>
                    <span className="mt-1 block text-sm leading-snug text-[#59645d]">{description}</span>
                  </span>
                  <FiArrowUpRight aria-hidden="true" className="shrink-0 text-[#277B50]" size={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="bg-[#F4F8F5] px-6 py-12 text-[#122922] md:px-12 md:py-16 lg:px-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 id="explore-heading" className="text-3xl font-bold leading-tight md:text-4xl">Explore More From Oncetra</h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-3">
            {resources.map(({ title, text, href, Icon, action }) => (
              <li key={href} className="min-w-0">
                <Link
                  to={href}
                  className="group flex h-full flex-col items-start gap-3 rounded-3xl border border-[#e1eae3] bg-white p-5 transition-colors hover:border-[#97c6a8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#277B50] sm:p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e6f2e9] text-[#277B50]">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#59645d]">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#277B50] underline-offset-4 group-hover:underline">
                    {action}<FiArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
