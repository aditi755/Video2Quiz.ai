'use client'
import React, { useState } from 'react';

const FAQSection = () => {
  // State to manage which FAQ is open
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  // Toggle function to open or close the FAQ
  const toggleFAQ = (index) => {
    if (openFAQIndex === index) {
      setOpenFAQIndex(null); // Close if already open
    } else {
      setOpenFAQIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Frequently Asked Questions</h2>
      <div className="mt-8 max-w-2xl mx-auto space-y-4">
        
        {/* Question 1 */}
        <div className="bg-muted p-6 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(0)}
          >
            <h3 className="text-2xl font-semibold text-primary">How does the YouTube video to quiz app work?</h3>
            <span className={`transition-transform transform ${openFAQIndex === 0 ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {openFAQIndex === 0 && (
            <p className="text-gray-300 mt-4">
              Our app takes the transcript of a YouTube video and automatically generates quizzes to help reinforce learning and understanding. Simply paste the video URL, and the app will create a quiz for you.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="bg-muted p-6 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(1)}
          >
            <h3 className="text-2xl font-semibold text-primary">Is there a limit to how many quizzes I can generate?</h3>
            <span className={`transition-transform transform ${openFAQIndex === 1 ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {openFAQIndex === 1 && (
            <p className="text-gray-300 mt-4">
              As of now this product is free and you can generate unlimited quizzes. In future, subcription plans would look like that with our free plan, you can generate 10 quiz per month. For unlimited quizzes and additional features, consider upgrading to Pro plan.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="bg-muted p-6 rounded-lg shadow-md">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(2)}
          >
            <h3 className="text-2xl font-semibold text-primary">Will all the quizzes be saved after generation?</h3>
            <span className={`transition-transform transform ${openFAQIndex === 2 ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          {openFAQIndex === 2 && (
            <p className="text-gray-300 mt-4">
              Yes, all the generated quizzes and the correct answers of the question will be stored and you can access them  whenever you want until and unless you delete them.
            </p>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;

