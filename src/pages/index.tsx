import * as React from 'react';

import AboutUs from '@/components/AboutUs/AboutUs';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';

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
