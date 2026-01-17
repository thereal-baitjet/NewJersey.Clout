
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Strategy } from './components/Strategy';
import { LocalProof } from './components/LocalProof';
import { Framework } from './components/Framework';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { StrategyPage } from './pages/StrategyPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
      // If user clicks an anchor link on the home page while already on home page,
      // the browser naturally scrolls. If they click from Strategy page, this helps.
      if (!window.location.hash.startsWith('#/full-strategy') && window.location.hash.includes('#')) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentPath.startsWith('#/full-strategy')) {
      return <StrategyPage />;
    }

    return (
      <>
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <Features />
        <Strategy />
        <Framework />
        <LocalProof />
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
      
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
