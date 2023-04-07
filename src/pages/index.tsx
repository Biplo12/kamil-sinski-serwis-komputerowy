import * as React from 'react';

import AboutMe from '@/components/AboutMe/AboutMe';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Hero />
      <AboutMe />
    </Layout>
  );
}
