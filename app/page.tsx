'use client';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-black"> 
      <Navigation />
      <Hero />
      <Tools />
      <Projects />
      {/* <Stats /> */}
      <FAQ />
      <Testimonials />
      <Contact />

    </main>
  );
}