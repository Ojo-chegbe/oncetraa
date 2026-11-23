import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { FiArrowUpRight, FiBookOpen, FiHeart, FiUsers, FiCheck } from 'react-icons/fi';
import SEO from '../components/SEO';

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595532660892', description: 'Community conversations and cancer education.', Icon: FaFacebookF, color: '#1877F2' },
  { name: 'Instagram', href: 'https://www.instagram.com/on_cetra/', description: 'Visual cancer awareness guides, carousels, and updates.', Icon: FaInstagram, color: '#C13584' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@oncetra', description: 'Quick health explainers and awareness videos.', Icon: FaTiktok, color: '#111827' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCY47aWAo7ify9gmq5o_iH3A', description: 'Educational videos and expert insights.', Icon: FaYoutube, color: '#E62117' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/oncetra/', description: 'Research, partnerships, and organisational updates.', Icon: FaLinkedinIn, color: '#0A66C2' },
  { name: 'X', href: 'https://x.com/Oncetra_org', description: 'Public health insights, news, and awareness.', Icon: SiX, color: '#111827' },
];

const resources = [
  { title: 'Explore Cancer Awareness Resources', text: 'Understand cancer risks, prevention, early warning signs, and informed health decisions.', href: '/resources/cancer-awareness', Icon: FiBookOpen, action: 'Explore resources' },
  { title: 'Volunteer With Oncetra', text: 'Use your skills and your voice to support cancer awareness and community initiatives.', href: '/get-involved/volunteer', Icon: FiHeart, action: 'Get involved' },
  { title: 'Partner With Us', text: 'Explore opportunities to collaborate on research, healthcare, and community impact.', href: '/get-involved/partner', Icon: FiUsers, action: 'Explore partnership' },
];

export default function LinksPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const data = new FormData();
      data.append('email', email);
      data.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      data.append('subject', 'Oncetra newsletter subscription');
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Subscription failed');
      setStatus('success'); setEmail('');
    } catch { setStatus('error'); }
  };

  return <main className="min-h-screen bg-[#f5f8f5] px-5 py-9 text-[#122922] sm:py-14">
    <SEO title="Connect With Oncetra | Official Social Media & Resources" description="Follow Oncetra on social media, explore cancer awareness resources, and connect with our research, prevention, and community initiatives in Africa." canonicalUrl="https://www.oncetra.org/links" />
    <div className="mx-auto w-full max-w-[560px]">
      <header className="mb-9 text-center">
        <Link to="/" aria-label="Oncetra home" className="inline-flex rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39A46B]"><img src="/logo.png" alt="Oncetra" className="h-12 w-auto" /></Link>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[.22em] text-[#39845e]">Cancer awareness · Research · Community</p>
        <h1 className="mx-auto mt-3 max-w-[520px] text-[2rem] font-semibold leading-tight tracking-[-.045em] sm:text-[2.5rem]">Rewriting the Story of Cancer Care in Africa.</h1>
        <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-6 text-[#52635a]">Stay connected with our work in cancer awareness, prevention, research, and community action.</p>
      </header>

      <section aria-labelledby="connect-heading">
        <div className="mb-4"><h2 id="connect-heading" className="text-xl font-semibold tracking-tight">Connect With Us</h2><p className="mt-1 text-sm leading-5 text-[#65736b]">Follow our work, discover educational content, and join the conversation.</p></div>
        <div className="grid gap-3">
          {socials.map(({ name, href, description, Icon, color }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${description} (opens in a new tab)`} className="group flex min-h-[76px] items-center gap-4 rounded-2xl border border-[#e0e8e1] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(18,41,34,.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#b7d5c2] hover:shadow-[0_8px_24px_rgba(18,41,34,.09)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39A46B] motion-reduce:transform-none motion-reduce:transition-none">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f2f6f3]" style={{ color }}><Icon aria-hidden="true" size={20} /></span><span className="min-w-0 flex-1"><span className="block font-semibold">{name}</span><span className="mt-0.5 block text-[13px] leading-[1.35rem] text-[#6a786f]">{description}</span></span><FiArrowUpRight aria-hidden="true" className="shrink-0 text-[#8a9b90] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={19} />
          </a>)}
        </div>
      </section>

      <section aria-labelledby="explore-heading" className="mt-10">
        <div className="mb-4"><h2 id="explore-heading" className="text-xl font-semibold tracking-tight">Explore More From Oncetra</h2><p className="mt-1 text-sm leading-5 text-[#65736b]">There’s more to our mission than what you see on social media.</p></div>
        <div className="grid gap-3">
          {resources.map(({ title, text, href, Icon, action }) => <Link key={href} to={href} className="group rounded-2xl border border-[#dce9df] bg-[#edf5ef] p-4 transition duration-200 hover:border-[#b7d5c2] hover:bg-[#e8f2ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39A46B] motion-reduce:transition-none">
            <div className="flex items-start gap-3"><span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#318256]"><Icon aria-hidden="true" size={18} /></span><span className="min-w-0 flex-1"><span className="block font-semibold leading-5">{title}</span><span className="mt-1 block text-[13px] leading-5 text-[#617168]">{text}</span><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#26734a]">{action}<FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" /></span></span></div>
          </Link>)}
        </div>
      </section>

      <section aria-labelledby="newsletter-heading" className="mt-10 rounded-2xl bg-[#122922] p-5 text-white sm:p-6">
        <h2 id="newsletter-heading" className="text-xl font-semibold tracking-tight">Stay Informed. Stay Empowered.</h2>
        <p className="mt-2 text-sm leading-5 text-white/75">Get cancer awareness resources, research updates, and Oncetra news delivered to your inbox.</p>
        {status === 'success' ? <p role="status" className="mt-4 flex items-center gap-2 text-sm text-[#a3e4bd]"><FiCheck aria-hidden="true" /> Thanks for subscribing. You’re on the list.</p> : <form onSubmit={subscribe} className="mt-4 flex flex-col gap-2 sm:flex-row"><label className="sr-only" htmlFor="links-email">Email address</label><input id="links-email" type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="min-h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71d49b]" /><button disabled={status === 'sending'} className="min-h-12 rounded-xl bg-[#39A46B] px-5 font-semibold text-white transition hover:bg-[#2f8d5b] active:bg-[#28794e] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{status === 'sending' ? 'Subscribing…' : 'Subscribe'}</button></form>}
        {status === 'error' && <p role="alert" className="mt-3 text-sm text-[#ffc2b8]">We couldn’t complete your subscription. Please try again.</p>}
      </section>

      <footer className="mt-9 flex flex-col items-center gap-2 pb-2 text-center text-xs text-[#77857c] sm:flex-row sm:justify-between"><Link to="/" className="font-semibold text-[#315c43] hover:text-[#26734a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#39A46B]">Oncetra</Link><span>© {new Date().getFullYear()} Oncetra. All rights reserved.</span><Link to="/" className="font-medium text-[#315c43] hover:text-[#26734a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#39A46B]">Visit our website</Link></footer>
    </div>
  </main>;
}
