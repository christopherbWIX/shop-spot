// HPI 1.5-V
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShoppingBag, Grid, List, Tag, Box, Crosshair, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Image } from '@/components/ui/image';

// --- UTILITY COMPONENTS ---

const JaggedLine = ({ className }: { className?: string }) => (
  <div className={`w-full h-4 overflow-hidden ${className}`}>
    <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full fill-current">
      <path d="M0,20 L0,0 L20,20 L40,0 L60,20 L80,0 L100,20 L120,0 L140,20 L160,0 L180,20 L200,0 L220,20 L240,0 L260,20 L280,0 L300,20 L320,0 L340,20 L360,0 L380,20 L400,0 L420,20 L440,0 L460,20 L480,0 L500,20 L520,0 L540,20 L560,0 L580,20 L600,0 L620,20 L640,0 L660,20 L680,0 L700,20 L720,0 L740,20 L760,0 L780,20 L800,0 L820,20 L840,0 L860,20 L880,0 L900,20 L920,0 L940,20 L960,0 L980,20 L1000,0 L1020,20 L1040,0 L1060,20 L1080,0 L1100,20 L1120,0 L1140,20 L1160,0 L1180,20 L1200,0 L1200,20 Z" />
    </svg>
  </div>
);

const GridMarker = ({ className }: { className?: string }) => (
  <div className={`absolute w-6 h-6 flex items-center justify-center pointer-events-none ${className}`}>
    <div className="absolute w-full h-[1px] bg-primary/30" />
    <div className="absolute h-full w-[1px] bg-primary/30" />
  </div>
);

// --- SCROLL REVEAL COMPONENT (Mandatory Pattern) ---
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`reveal-trigger ${className || ''}`}>{children}</div>;
};

// --- MAIN COMPONENT ---

export default function HomePage() {
  // Parallax Hooks
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 15]);

  // Mouse Move Effect for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  return (
    <div 
      className="min-h-screen bg-background text-primary font-paragraph selection:bg-primary selection:text-primary-foreground overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Global Styles for Reveal Animations */}
      <style>{`
        .reveal-trigger {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-trigger.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .clip-sawtooth {
          clip-path: polygon(
            0% 0%, 100% 0%, 100% 100%, 
            98% 98%, 96% 100%, 94% 98%, 92% 100%, 90% 98%, 88% 100%, 86% 98%, 84% 100%, 82% 98%, 80% 100%, 
            78% 98%, 76% 100%, 74% 98%, 72% 100%, 70% 98%, 68% 100%, 66% 98%, 64% 100%, 62% 98%, 60% 100%, 
            58% 98%, 56% 100%, 54% 98%, 52% 100%, 50% 98%, 48% 100%, 46% 98%, 44% 100%, 42% 98%, 40% 100%, 
            38% 98%, 36% 100%, 34% 98%, 32% 100%, 30% 98%, 28% 100%, 26% 98%, 24% 100%, 22% 98%, 20% 100%, 
            18% 98%, 16% 100%, 14% 98%, 12% 100%, 10% 98%, 8% 100%, 6% 98%, 4% 100%, 2% 98%, 0% 100%
          );
        }
        .text-stroke {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 md:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           {/* Large Abstract Circle - Parallax */}
           <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full border-[1px] border-primary/10 border-dashed" />
           <motion.div style={{ y: y2 }} className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] bg-abstractshape/10 rounded-full blur-3xl" />
           
           {/* Grid Markers */}
           <GridMarker className="top-12 left-12" />
           <GridMarker className="top-12 right-12" />
           <GridMarker className="bottom-12 left-12" />
           <GridMarker className="bottom-12 right-12" />
        </div>

        {/* Top Navigation / Meta */}
        <div className="relative z-20 w-full max-w-[120rem] mx-auto flex justify-between items-start font-paragraph text-xs md:text-sm tracking-widest uppercase">
          <div className="flex flex-col gap-1">
            <span className="font-bold">Spring Collection</span>
            <span className="text-primary/60">Est. 2025</span>
          </div>
          <div className="hidden md:flex gap-12">
            <Link to="/categories" className="hover:text-primary-foreground hover:bg-primary px-2 py-1 transition-colors">Workshops</Link>
            <Link to="/store" className="hover:text-primary-foreground hover:bg-primary px-2 py-1 transition-colors">Store</Link>
            <Link to="/categories" className="hover:text-primary-foreground hover:bg-primary px-2 py-1 transition-colors">Lookbook</Link>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Link to="/store" className="flex items-center gap-2 border-b border-primary pb-1 hover:border-b-2 transition-all">
              <span>Login</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </Link>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto flex-grow flex flex-col justify-center">
          <div className="relative">
            {/* Giant Typography */}
            <h1 className="font-heading text-[15vw] leading-[0.8] tracking-tighter text-primary uppercase mix-blend-multiply">
              <motion.span 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, ease: "easeOut" }}
                className="block"
              >
                Modern
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="block text-right md:text-center lg:text-left ml-[10vw]"
              >
                Retail
              </motion.span>
              <motion.span 
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="block text-stroke opacity-50 hover:opacity-100 transition-opacity duration-500"
              >
                Experience
              </motion.span>
            </h1>

            {/* Floating Image Overlay */}
            <motion.div 
              style={{ y: y2, x: useTransform(mouseX, [0, 1], [-20, 20]) }}
              className="absolute top-[10%] right-0 md:right-[10%] w-[40vw] md:w-[25vw] aspect-[3/4] z-[-1] md:z-10"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 clip-sawtooth" />
                <div className="absolute inset-0 clip-sawtooth bg-background">
                   <Image 
                     src="https://static.wixstatic.com/media/45a11d_3c349c6200ae497f97c106495ed70c37~mv2.png?originWidth=576&originHeight=960" 
                     alt="Modern fashion editorial shot" 
                     className="opacity-90 hover:scale-105 transition-transform duration-700"
                   />
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-8 -left-8 bg-primary-foreground text-primary font-paragraph text-xs font-bold p-4 rotate-12 shadow-lg">
                  NEW ARRIVALS
                  <br />
                  AVAILABLE NOW
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hero Info */}
        <div className="relative z-20 w-full max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="font-paragraph text-sm max-w-xs leading-relaxed">
            <span className="bg-primary text-primary-foreground px-1 mr-2">V.1.5</span>
            Curated collections blending innovation with timeless design. Crafted for the contemporary lifestyle.
          </div>
          
          <div className="flex justify-center">
             <Link to="/store">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-16 px-12 font-heading text-xl uppercase tracking-widest group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-4">
                    Start Browsing <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
             </Link>
          </div>

          <div className="text-right font-paragraph text-xs uppercase tracking-widest space-y-1 hidden md:block">
            <p>San Francisco, CA</p>
            <p>In Person & Online</p>
          </div>
        </div>
      </section>

      <JaggedLine className="text-primary mb-24" />

      {/* --- TICKER SECTION --- */}
      <section className="w-full overflow-hidden bg-primary text-primary-foreground py-4 mb-24 rotate-1 scale-105 border-y-2 border-primary-foreground">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 font-heading text-4xl uppercase tracking-tight">
              <span>New Collection Drops</span>
              <Crosshair className="w-6 h-6" />
              <span>Limited Edition</span>
              <div className="w-4 h-4 bg-primary-foreground rotate-45" />
            </div>
          ))}
        </div>
        <style>{`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* --- CATEGORY GRID (The "Choice" Component Visualization) --- */}
      <section className="relative w-full max-w-[120rem] mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3 relative">
            <div className="sticky top-32 space-y-8">
              <AnimatedElement>
                <h2 className="font-heading text-6xl md:text-7xl uppercase leading-[0.9] text-primary mb-6">
                  Select<br/>Category
                </h2>
                <p className="font-paragraph text-sm text-primary/80 mb-8 max-w-[200px]">
                  Navigate our departments. Each piece is selected for quality and aesthetic impact.
                </p>
                <Link to="/categories">
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase font-bold tracking-widest">
                    View All
                  </Button>
                </Link>
              </AnimatedElement>
              
              <div className="hidden lg:block w-full h-[1px] bg-primary/20 my-8" />
              
              <div className="hidden lg:flex flex-col gap-4 font-paragraph text-xs uppercase tracking-widest text-primary/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Apparel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-transparent border border-primary rounded-full" />
                  <span>Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-transparent border border-primary rounded-full" />
                  <span>Objects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Content */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Card 1 */}
            <AnimatedElement className="group relative aspect-[4/5] md:aspect-[3/4] bg-white overflow-hidden border border-primary/10">
              <Link to="/categories" className="block w-full h-full">
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-colors duration-500 group-hover:bg-primary/10">
                  <div className="flex justify-between items-start">
                    <span className="font-paragraph text-xs bg-primary text-primary-foreground px-2 py-1">01</span>
                    <ArrowUpRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-5xl uppercase text-primary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Apparel</h3>
                    <p className="font-paragraph text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Essential wear for the modern creative.
                    </p>
                  </div>
                </div>
                <Image 
                  src="https://static.wixstatic.com/media/45a11d_fec9cd9ea40445b7b51afe043b516184~mv2.png?originWidth=576&originHeight=768" 
                  alt="Apparel Category" 
                  className="grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </Link>
            </AnimatedElement>

            {/* Category Card 2 - Offset */}
            <AnimatedElement delay={200} className="group relative aspect-[4/5] md:aspect-[3/4] bg-white overflow-hidden border border-primary/10 md:mt-24">
              <Link to="/categories" className="block w-full h-full">
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-colors duration-500 group-hover:bg-primary/10">
                  <div className="flex justify-between items-start">
                    <span className="font-paragraph text-xs bg-primary text-primary-foreground px-2 py-1">02</span>
                    <ArrowUpRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-5xl uppercase text-primary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Objects</h3>
                    <p className="font-paragraph text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Curated artifacts for your workspace.
                    </p>
                  </div>
                </div>
                <Image 
                  src="https://static.wixstatic.com/media/45a11d_fafb0534b5b24ba3bde938f2b145a4c6~mv2.png?originWidth=576&originHeight=768" 
                  alt="Objects Category" 
                  className="grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </Link>
            </AnimatedElement>

             {/* Category Card 3 */}
             <AnimatedElement className="group relative aspect-[4/5] md:aspect-[3/4] bg-white overflow-hidden border border-primary/10">
              <Link to="/categories" className="block w-full h-full">
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-colors duration-500 group-hover:bg-primary/10">
                  <div className="flex justify-between items-start">
                    <span className="font-paragraph text-xs bg-primary text-primary-foreground px-2 py-1">03</span>
                    <ArrowUpRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-5xl uppercase text-primary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Tech</h3>
                    <p className="font-paragraph text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Tools for the digital frontier.
                    </p>
                  </div>
                </div>
                <Image 
                  src="https://static.wixstatic.com/media/45a11d_f25ce53084964500aaef82aa0362369b~mv2.png?originWidth=576&originHeight=768" 
                  alt="Tech Category" 
                  className="grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </Link>
            </AnimatedElement>

            {/* Category Card 4 - Offset */}
            <AnimatedElement delay={200} className="group relative aspect-[4/5] md:aspect-[3/4] bg-white overflow-hidden border border-primary/10 md:mt-24">
              <Link to="/categories" className="block w-full h-full">
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between transition-colors duration-500 group-hover:bg-primary/10">
                  <div className="flex justify-between items-start">
                    <span className="font-paragraph text-xs bg-primary text-primary-foreground px-2 py-1">04</span>
                    <ArrowUpRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-5xl uppercase text-primary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Print</h3>
                    <p className="font-paragraph text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Editorial design and publications.
                    </p>
                  </div>
                </div>
                <Image 
                  src="https://static.wixstatic.com/media/45a11d_fe7b94820f454461a9a857df1a9d49f6~mv2.png?originWidth=576&originHeight=768" 
                  alt="Print Category" 
                  className="grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </Link>
            </AnimatedElement>

          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCT LIST (The "Product List" Component Visualization) --- */}
      <section className="relative w-full bg-primary text-background py-32 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DFFF00 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative max-w-[120rem] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary-foreground/20 pb-8">
            <AnimatedElement>
              <h2 className="font-heading text-6xl md:text-8xl uppercase text-primary-foreground">
                Latest<br/>Drops
              </h2>
            </AnimatedElement>
            <AnimatedElement delay={200}>
              <Link to="/store">
                <Button className="bg-primary-foreground text-primary hover:bg-white rounded-none px-8 py-6 font-heading uppercase tracking-widest text-lg">
                  View All Products
                </Button>
              </Link>
            </AnimatedElement>
          </div>

          {/* Product List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/20 border border-primary-foreground/20">
            {[
              { id: 1, name: "Modular Pack", price: "$120.00", tag: "Best Seller", img: "prod-1" },
              { id: 2, name: "Analog Watch", price: "$250.00", tag: "New", img: "prod-2" },
              { id: 3, name: "Desk Mat", price: "$45.00", tag: "Essential", img: "prod-3" },
              { id: 4, name: "Type Specimen", price: "$30.00", tag: "Print", img: "prod-4" },
            ].map((product, index) => (
              <AnimatedElement key={product.id} delay={index * 100} className="bg-primary group relative h-[500px] overflow-hidden hover:z-10 transition-all">
                <Link to="/store" className="block w-full h-full flex flex-col">
                  <div className="relative flex-grow overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary-foreground text-primary text-xs font-bold px-2 py-1 uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>
                    <Image 
                      src={'https://static.wixstatic.com/media/45a11d_6080b9207e354418b0b6b309d815360c~mv2.png?originWidth=384&originHeight=448'}
                      alt={product.name}
                      className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Quick Add Overlay */}
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="border border-primary-foreground text-primary-foreground px-6 py-3 uppercase font-heading tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors">
                        Quick View
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-primary-foreground/10 bg-primary group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="font-heading text-xl uppercase">{product.name}</h3>
                      <span className="font-paragraph text-sm font-bold">{product.price}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDITORIAL / MANIFESTO SECTION --- */}
      <section className="relative w-full py-32 px-4 md:px-8 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <AnimatedElement className="relative z-10">
               <div className="aspect-square w-full max-w-xl mx-auto relative">
                 <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
                 <div className="absolute inset-0 bg-abstractshape/20 clip-sawtooth" />
                 <Image 
                   src="https://static.wixstatic.com/media/45a11d_1475355b05154f83a1883e2f4817388c~mv2.png?originWidth=768&originHeight=768"
                   alt="Editorial Feature"
                   className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
             </AnimatedElement>
             {/* Decorative Text Behind */}
             <div className="absolute -top-20 -left-20 font-heading text-[10rem] text-primary/5 select-none pointer-events-none z-0">
               ZEKO
             </div>
          </div>

          <div className="space-y-12">
            <AnimatedElement>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="font-paragraph text-sm uppercase tracking-widest">The Philosophy</span>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl uppercase text-primary leading-[0.9]">
                Design is<br/>
                <span className="text-transparent text-stroke">Intelligence</span><br/>
                Made Visible
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="font-paragraph text-lg text-primary/80 leading-relaxed max-w-md">
                We believe in the power of objects to shape our daily rituals. Our store is a curated collection of items that bring clarity, function, and beauty to your environment.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <div className="grid grid-cols-2 gap-8 border-t border-primary/20 pt-8">
                <div>
                  <h4 className="font-heading text-2xl uppercase mb-2">Global</h4>
                  <p className="font-paragraph text-xs text-primary/60">Sourced from artisans worldwide.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl uppercase mb-2">Sustainable</h4>
                  <p className="font-paragraph text-xs text-primary/60">Materials that respect the earth.</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="relative w-full bg-secondary text-secondary-foreground pt-32 pb-12 px-4 md:px-8 overflow-hidden">
        <JaggedLine className="absolute top-0 left-0 w-full text-background rotate-180" />
        
        <div className="max-w-[120rem] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-12 mb-24">
            <AnimatedElement>
              <h2 className="font-heading text-[12vw] leading-[0.8] uppercase text-primary mix-blend-multiply opacity-90">
                Ready To<br/>Explore?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <Link to="/store">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-20 px-16 rounded-full font-heading text-2xl uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl">
                  Enter Store
                </Button>
              </Link>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-primary/20 pt-12">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl uppercase">Navigate</h3>
              <ul className="font-paragraph text-sm space-y-2">
                <li><Link to="/store" className="hover:underline">All Products</Link></li>
                <li><Link to="/categories" className="hover:underline">Categories</Link></li>
                <li><Link to="/store" className="hover:underline">New Arrivals</Link></li>
                <li><Link to="/categories" className="hover:underline">Editorial</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-heading text-2xl uppercase">Support</h3>
              <ul className="font-paragraph text-sm space-y-2">
                <li><Link to="/store" className="hover:underline">Shipping</Link></li>
                <li><Link to="/store" className="hover:underline">Returns</Link></li>
                <li><Link to="/store" className="hover:underline">FAQ</Link></li>
                <li><Link to="/store" className="hover:underline">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl uppercase">Newsletter</h3>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="bg-transparent border-b border-primary w-full py-2 font-paragraph text-sm focus:outline-none placeholder:text-primary/40"
                  />
                  <Button variant="ghost" className="hover:bg-transparent p-0 text-primary">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="mt-12 font-paragraph text-xs opacity-50 uppercase tracking-widest">
                © 2025 Zeko Design Summit. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}