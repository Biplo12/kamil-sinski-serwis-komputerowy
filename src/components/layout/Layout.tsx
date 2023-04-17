import * as React from 'react';

import BottomBar from '@/components/layout/BottomBar/BottomBar';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-black-stalion'>
      <Header />
      {children}
      <Footer />
      <BottomBar />
    </div>
  );
}
