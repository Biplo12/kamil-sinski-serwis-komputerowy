import * as React from 'react';

import AboutUs from '@/components/AboutUs/AboutUs';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';

import Contact from '@/Contact/Contact';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Hero />
      <AboutUs />
      <WhyUs />
      <Services />
      <Contact />
    </Layout>
  );
}
