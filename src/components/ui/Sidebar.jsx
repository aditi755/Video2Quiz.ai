
'use client';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { MdOutlineQuiz } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";

export default function Sidebar({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <GiHamburgerMenu
          size={30}
          onClick={toggleSidebar}
          className="cursor-pointer text-white"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen max-h-screen w-48 bg-gray-600 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:flex sm:flex-col sm:visible z-40`}
      >
        <div className="flex flex-col items-center h-full">
          {/* Close Icon for Mobile */}
          <div className="self-end p-4 sm:hidden">
            <MdClose
              size={30}
              onClick={toggleSidebar}
              className="cursor-pointer text-white"
            />
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col justify-center items-center gap-8 mt-20 w-full">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('Quiz')}>
              <MdOutlineQuiz size={24} className="text-white" />
              <h3 className="text-white text-lg">Quiz</h3>
            </div>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('History')}>
              <FaHistory size={24} className="text-white" />
              <h3 className="text-white text-lg">History</h3>
            </div>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('Pricing')}>
              <MdOutlinePriceChange size={24} className="text-white" />
              <h3 className="text-white text-lg">Pricing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
