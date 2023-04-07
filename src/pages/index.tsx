import * as React from 'react';

import Hero from '@/components/Hero/Hero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <div className='bg-black-stalion flex h-[91vh] w-full items-center justify-center text-white'>
        <Hero />
      </div>
    </Layout>
  );
}
