import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import CarouselSection from '../components/CarouselSection';
import ScrollReveal from '../components/ScrollReveal';

type ModelCategory = "Video" | "Image" | "Assistant" | "Audio";

interface AIModel {
  name: string;
  provider: string;
  category: ModelCategory;
  description: string;
  featured?: boolean;
  span?: number;
}

const modelsData: AIModel[] = [
  // --- ASSISTANT ---
  { name: "GPT 5.5", provider: "OpenAI", category: "Assistant", description: "The next level of AI intelligence. It converses so naturally you'll forget it's an AI.", featured: true, span: 2 },
  { name: "Claude Opus 4.8", provider: "Anthropic", category: "Assistant", description: "The ultimate thinker. Best for deep analysis and long, thoughtful answers.", featured: true, span: 2 },
  { name: "Gemini 3.1 pro", provider: "Google", category: "Assistant", description: "Incredibly smart, ready to tackle your hardest problems and projects." },
  { name: "GPT 5.4 Pro", provider: "OpenAI", category: "Assistant", description: "A powerful, reliable assistant that excels at writing, coding, and brainstorming." },
  { name: "Claude Opus 4.7", provider: "Anthropic", category: "Assistant", description: "A deeply intelligent assistant that writes beautifully and thinks critically." },
  { name: "Claude Sonnet", provider: "Anthropic", category: "Assistant", description: "Quick, bright, and perfect for everyday writing and chatting tasks." },
  { name: "Gemini 3 Flash", provider: "Google", category: "Assistant", description: "Incredibly fast and snappy, perfect for quick questions and summaries." },
  { name: "Grok 4.3", provider: "xAI", category: "Assistant", description: "Witty, unfiltered, and always up to date with the latest world events." },
  { name: "GLM 5.2", provider: "Zhipu AI", category: "Assistant", description: "A strong, versatile assistant that's great at handling complex instructions." },
  { name: "Kimi k2.6", provider: "Moonshot", category: "Assistant", description: "Excellent at reading long documents and helping you make sense of large amounts of text." },

  // --- VIDEO ---
  { name: "Sora 2 pro", provider: "OpenAI", category: "Video", description: "The ultimate video model for professionals looking for movie-level perfection.", featured: true, span: 2 },
  { name: "Kling 3.0 pro", provider: "Kuaishou", category: "Video", description: "Our top-tier video creator. Perfect for highly realistic and detailed cinematic shots.", featured: true, span: 2 },
  { name: "Sora 2", provider: "OpenAI", category: "Video", description: "Creates incredibly realistic and physically accurate videos. It feels like magic." },
  { name: "Kling 3.0 Standard", provider: "Kuaishou", category: "Video", description: "A solid everyday model for creating quick and reliable video content." },
  { name: "Veo 3.1", provider: "Google", category: "Video", description: "A powerful video engine that understands exactly what you want to see." },
  { name: "Seedance 2.0 pro", provider: "ByteDance", category: "Video", description: "The complete package for breathtaking, high-resolution video creation.", featured: true },
  { name: "LTX Video 2.3 pro", provider: "Lightricks", category: "Video", description: "Enhanced storytelling capabilities with sharper details for longer videos." },
  { name: "Veo 3.1 Fast", provider: "Google", category: "Video", description: "For when you need a high-quality video generated in a matter of seconds." },
  { name: "Veo 3.1 Lite", provider: "Google", category: "Video", description: "A lightweight version that runs smoothly for quick, simple ideas." },
  { name: "Seedance 2.0", provider: "ByteDance", category: "Video", description: "A great choice for making smooth, vibrant videos from simple text." },
  { name: "Kling v2.6", provider: "Kuaishou", category: "Video", description: "A classic favorite that still delivers great results for basic video generation." },
  { name: "PixVerse v5", provider: "PixVerse", category: "Video", description: "Gives your videos an artistic touch, making animations look stunning." },
  { name: "Grok Imagine 1.5", provider: "xAI", category: "Video", description: "Turns your wild ideas into fun, engaging video clips effortlessly." },
  { name: "Hailuo 2.3", provider: "MiniMax", category: "Video", description: "A creative engine that adds a unique, stylized flair to your video clips." },
  { name: "Hailuo 2.3 fast", provider: "MiniMax", category: "Video", description: "Get signature creative styles without the wait." },
  { name: "Wan 2.7", provider: "Alibaba", category: "Video", description: "A versatile video maker that handles a bit of everything really well." },
  { name: "LTX Video 2.3", provider: "Lightricks", category: "Video", description: "Great for long, continuous shots and storytelling." },
  { name: "P Video", provider: "Pika Labs", category: "Video", description: "A specialized model for generating incredibly fluid and dynamic movements." },
  { name: "Seedance 2.0 mini", provider: "ByteDance", category: "Video", description: "A compact, fast version for quick social media clips." },
  { name: "Seedance 1.5 pro", provider: "ByteDance", category: "Video", description: "The older, reliable workhorse for professional video generation." },

  // --- IMAGE ---
  { name: "Flux pro 2", provider: "Black Forest Labs", category: "Image", description: "Outstanding at creating photorealistic images with perfect lighting.", featured: true, span: 2 },
  { name: "Wan 2.7 image pro", provider: "Alibaba", category: "Image", description: "Takes artistic capabilities to a professional, high-res level.", featured: true, span: 2 },
  { name: "Flux Dev 2", provider: "Black Forest Labs", category: "Image", description: "Great for creators who like to tweak their image generation." },
  { name: "GPT Image 2", provider: "OpenAI", category: "Image", description: "Smarter and more detailed, making sure your exact ideas come to life." },
  { name: "GPT Image 1.5", provider: "OpenAI", category: "Image", description: "A reliable way to turn your descriptions into clear, accurate images." },
  { name: "Nano Banana pro", provider: "Banana", category: "Image", description: "Delivers a fun style but with much higher detail and polish." },
  { name: "Nano Banana 2", provider: "Banana", category: "Image", description: "A fun, super-fast model for creating quirky and creative images." },
  { name: "Nano Banana", provider: "Banana", category: "Image", description: "The original speedy image creator for your quick visual needs." },
  { name: "Wan 2.7 image", provider: "Alibaba", category: "Image", description: "A fantastic all-rounder for creating beautiful, artistic imagery." },
  { name: "Seedream 4.5", provider: "Seedream", category: "Image", description: "Vibrant and detailed dream-like creations." },
  { name: "Seedream 4", provider: "Seedream", category: "Image", description: "Specializes in dreamy, imaginative, and highly stylized visuals." },

  // --- AUDIO ---
  { name: "Suno AI", provider: "Suno", category: "Audio", description: "Turns your text into full, catchy songs with vocals and music in seconds.", featured: true, span: 2 },
  { name: "ElevenLabs", provider: "ElevenLabs", category: "Audio", description: "The gold standard for generating realistic, human-sounding voices from text.", featured: true, span: 2 },
  { name: "Lyria 3 Pro", provider: "Google", category: "Audio", description: "Incredible at generating high-quality music tracks and soundscapes." },
  { name: "MiniMax", provider: "MiniMax", category: "Audio", description: "Creates highly expressive and emotional voices for your characters or videos." },
  { name: "MiniMax Speech HD", provider: "MiniMax", category: "Audio", description: "Ultra-clear, high-definition voice generation for professional audio work." },
  { name: "Resemble Chatterbox Pro", provider: "Resemble AI", category: "Audio", description: "Professional-grade conversational voices with advanced emotion control." },
  { name: "Resemble Chatterbox", provider: "Resemble AI", category: "Audio", description: "Great for creating dynamic, conversational voice interactions." }
];

const categoryDescriptions = {
  Assistant: "The brains behind the operation. From coding to creative writing, these models converse, reason, and solve problems at an extraordinary level.",
  Video: "Cinematic, fluid, and realistic. Turn simple text prompts into breathtaking motion pictures in seconds.",
  Image: "Photorealism, art, and everything in between. Generate stunning visuals with perfect lighting and composition.",
  Audio: "Voices that sound human and music that feels real. The leading models for speech synthesis and song generation."
};

const categories: ModelCategory[] = ['Assistant', 'Video', 'Image', 'Audio'];

// Helper for Provider Styles
const getProviderStyle = (provider: string) => {
  const p = provider.toLowerCase();
  if (p.includes('openai')) return { gradient: 'from-emerald-500 to-teal-700', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' };
  if (p.includes('anthropic')) return { gradient: 'from-orange-400 to-rose-500', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2' };
  if (p.includes('google')) return { gradient: 'from-blue-500 to-indigo-600', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' };
  if (p.includes('xai')) return { gradient: 'from-zinc-800 to-black', icon: 'M4 4h16v16H4zM4 4l16 16M20 4L4 20' };
  if (p.includes('kuaishou') || p.includes('bytedance') || p.includes('tiktok')) return { gradient: 'from-fuchsia-500 to-purple-700', icon: 'M14.536 21.686a.5.5 0 0 0 .937-.404l-4-15a.5.5 0 0 0-.937-.404l-4 15a.5.5 0 0 0 .937.404l4-15' };
  if (p.includes('alibaba') || p.includes('moonshot') || p.includes('zhipu')) return { gradient: 'from-cyan-400 to-blue-600', icon: 'M12 2L2 22h20L12 2z' };
  if (p.includes('suno') || p.includes('elevenlabs') || p.includes('resemble')) return { gradient: 'from-violet-500 to-fuchsia-600', icon: 'M9 18V5l12-2v13M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' };
  if (p.includes('black forest')) return { gradient: 'from-slate-700 to-gray-900', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' };
  // Fallback
  return { gradient: 'from-sky-400 to-indigo-500', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' };
};

const Models = () => {
  const [activeTab, setActiveTab] = useState<ModelCategory | 'All'>('All');

  const featuredModels = modelsData.filter(m => m.featured);
  
  // Map to Oncetra's Carousel Format
  const carouselCards = featuredModels.map(model => ({
    title: model.name,
    description: model.description,
    category: model.category,
    imageSrc: `/home/nature_science.png`, // Generic fallback
    buttonText: "Try Model",
    buttonLink: "#"
  }));

  const scrollToCategory = (category: string) => {
    setActiveTab(category as any);
    if (category !== 'All') {
      const element = document.getElementById(`category-${category}`);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F4F5F6] min-h-screen pb-32">
      <SEO 
        title="Soloa.ai Models | The World's Best AI, All in One Place"
        description="Explore the full suite of Soloa.ai models including Video, Image, Assistant, and Audio generators."
      />
      
      <HeroSection 
        headline={"The World's Best AI,\nAll in One Place."}
        subHeadline={"Whether you're generating cinematic videos, lifelike images, composing music, or solving complex problems — we have the perfect model for you."}
        bgImage="/images/heroes/products.png"
        showRightContent={false}
      />

      <ScrollReveal>
        <CarouselSection 
          headline="Featured Models"
          subHeadline="Meet the industry-leading models defining the next generation of AI."
          cards={carouselCards}
          bgWhite={true}
        />
      </ScrollReveal>

      <div className="px-6 md:px-12 lg:px-[120px] max-w-[1400px] mx-auto mt-24">
        
        {/* Sticky Filter Bar */}
        <div className="sticky top-[90px] z-40 bg-[#F4F5F6]/90 backdrop-blur-md py-4 mb-16 border-b border-gray-200/50">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-[#222222] font-semibold mr-4 hidden md:block">Explore By:</span>
            {['All', ...categories].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToCategory(tab)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 border ${
                  activeTab === tab || (activeTab !== 'All' && tab === activeTab)
                    ? 'bg-[#39A46B] text-white border-[#39A46B]' 
                    : 'bg-white text-[#727272] border-gray-200 hover:border-[#39A46B] hover:text-[#39A46B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Zig-Zag Categories Layout */}
        <div className="flex flex-col gap-32">
          {categories.map((category, index) => {
            if (activeTab !== 'All' && activeTab !== category) return null;

            const categoryModels = modelsData.filter(m => m.category === category);
            // Alternate sidebar placement for an editorial feel
            const isSidebarRight = index % 2 !== 0;

            return (
              <ScrollReveal key={category}>
                <div id={`category-${category}`} className={`flex flex-col ${isSidebarRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start`}>
                  
                  {/* Sticky Category Sidebar */}
                  <div className={`lg:sticky lg:top-[180px] lg:w-[30%] shrink-0 flex flex-col ${isSidebarRight ? 'lg:items-end lg:text-right' : 'lg:items-start'}`}>
                    <div className={`flex items-center gap-4 mb-6 ${isSidebarRight ? 'flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm shrink-0 text-[#39A46B]">
                        {category === 'Assistant' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
                        {category === 'Video' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>}
                        {category === 'Image' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>}
                        {category === 'Audio' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>}
                      </div>
                      <h2 className="text-[#222222] text-4xl font-extrabold tracking-tight">{category}</h2>
                    </div>
                    <div className="w-12 h-1 bg-[#39A46B] mb-6 rounded-full"></div>
                    <p className="text-[#727272] text-lg leading-relaxed max-w-[400px]">
                      {categoryDescriptions[category]}
                    </p>
                  </div>

                  {/* Bento Grid */}
                  <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    {categoryModels.map((model, idx) => {
                      const styleInfo = getProviderStyle(model.provider);
                      return (
                        <div 
                          key={idx} 
                          className={`group relative overflow-hidden bg-white rounded-[24px] border border-gray-100 flex flex-col hover:border-[#39A46B]/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                            model.span === 2 ? 'md:col-span-2' : 'col-span-1'
                          }`}
                        >
                          <div className={`w-full bg-gradient-to-br ${styleInfo.gradient} flex items-center justify-center relative overflow-hidden ${model.span === 2 ? 'h-64' : 'h-48'}`}>
                            {/* Abstract faint circles for texture */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_50%)] bg-[length:20px_20px]"></div>
                            <svg width={model.span === 2 ? "80" : "56"} height={model.span === 2 ? "80" : "56"} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 drop-shadow-md">
                               <path d={styleInfo.icon}></path>
                            </svg>
                          </div>

                          {/* Card Content */}
                          <div className={`flex flex-col p-6 lg:p-8 flex-1`}>
                            <div className="flex justify-between items-start w-full mb-2">
                              <span className="text-[#A0A0A0] text-[11px] font-bold uppercase tracking-[0.2em] mb-2 block">
                                By {model.provider}
                              </span>
                              
                              <div className="w-8 h-8 rounded-full bg-[#F4F5F6] flex items-center justify-center text-[#222222] group-hover:bg-[#39A46B] group-hover:text-white transition-colors duration-300 shrink-0">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                  <line x1="5" y1="19" x2="19" y2="5"></line><polyline points="10 5 19 5 19 14"></polyline>
                                </svg>
                              </div>
                            </div>

                            <h4 className={`font-bold text-[#222222] mb-3 ${model.span === 2 ? 'text-3xl' : 'text-2xl'}`}>
                              {model.name}
                            </h4>
                            
                            <p className={`text-[#727272] leading-relaxed flex-1 ${model.span === 2 ? 'text-lg max-w-[85%]' : 'text-[15px]'}`}>
                              {model.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Models;
