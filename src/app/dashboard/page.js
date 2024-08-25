
'use client'

import React, { useState } from 'react';
import Sidebar from '@/components/ui/Sidebar';
import Quiz from '@/components/ui/Quiz';
import History from '@/components/ui/History';
import Pricing from '@/components/ui/Pricing';
const Page = () => {
  const [activePage, setActivePage] = useState('Quiz');
  const [savedQuizzes, setSavedQuizzes] = useState([]);

  const renderContent = () => {
    switch (activePage) {
      case 'Quiz':
        return <Quiz savedQuizzes={savedQuizzes} setSavedQuizzes={setSavedQuizzes} />;
      case 'History':
        return <History savedQuizzes={savedQuizzes} setSavedQuizzes={setSavedQuizzes}/>;
      case 'Pricing':
        return <Pricing />;
      default:
        return <Quiz />;
    }
  };

  return (
    <main className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar onSelect={setActivePage} />

      {/* Main Content */}
      <div className="flex-grow p-4 mt-10 sm:mt-0 sm:ml-40">
        {renderContent()}
      </div>
    </main>
  );
};

export default Page;

