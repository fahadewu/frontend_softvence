'use client';

import React from 'react';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="page" className="site">
      <div className="parent--wrapper">
        <Header />
        <main>
            <MainContent />
        </main>
        <ContactMarquee />
        <ContactPopup />
        <Footer />
      </div>
    </div>
  );
}
