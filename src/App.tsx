/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Privacy } from './components/Privacy';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans selection:bg-green-primary/30 selection:text-white">
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Privacy />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
}

