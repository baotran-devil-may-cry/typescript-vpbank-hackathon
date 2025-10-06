'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Mentors', href: '#mentors' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Header Container: bg-gradient-to-r creates horizontal gradient, from-teal-700 to-green-700 sets gradient colors, text-white sets default text color
    <header className="bg-gradient-to-r from-teal-700 to-green-700 text-white">
      {/* Container wrapper: container centers content with max-width, mx-auto centers horizontally, px-4 adds 16px horizontal padding */}
      <div className="container mx-auto px-4">
        {/* Main flex container: flex enables flexbox, items-center vertically centers children, justify-between spreads logos left and menu button right on mobile/tablet, md:justify-center centers all content on desktop, h-14 sets 56px height, w-full takes full width, px-4 lg:px-8 responsive padding (16px → 32px) */}
        <div className="flex items-center justify-between md:justify-center h-14 w-full px-4 lg:px-8">
          {/* Left section - Logo container: flex items-center creates horizontal layout with vertical centering, space-x-2 lg:space-x-3 responsive spacing between logos (8px → 12px), md:mr-8 lg:mr-12 xl:mr-20 adds right margin only on desktop (0px on mobile → 32px → 48px → 80px) - this allows logos to stay left on mobile while maintaining centered layout on desktop */}
          <div className="flex items-center space-x-2 lg:space-x-3 md:mr-8 lg:mr-12 xl:mr-20">
            {/* VPBank Logo: h-8 lg:h-10 responsive height (32px → 40px), w-auto maintains aspect ratio, priority optimizes above-the-fold loading */}
            <Image
              src="https://w.ladicdn.com/s450x350/5c7362c6c417ab07e5196b05/vp-bank-20240215071600-nr1pe.png"
              alt="VPBank"
              width={120}
              height={48}
              className="h-8 lg:h-10 w-auto"
              priority
            />

            {/* AWS Logo: h-7 lg:h-9 responsive height (28px → 36px), w-auto maintains aspect ratio, pt-1 adds 4px top padding for alignment */}
            <Image
              src="https://w.ladicdn.com/s450x350/5c7362c6c417ab07e5196b05/pue-20250529063413-atwmn.png"
              alt="AWS"
              width={100}
              height={40}
              className="h-7 lg:h-9 w-auto pt-1"
            />
          </div>

          {/* Center Navigation: hidden md:flex hides on mobile/shows on desktop, items-center vertically centers, space-x-6 lg:space-x-8 xl:space-x-12 responsive spacing between nav items (24px → 32px → 48px) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // nav-link applies custom CSS class with Montserrat font and styling, text-white sets color, hover:text-gray-300 changes color on hover, transition-colors duration-200 smooth color transition, font-medium adds font weight, whitespace-nowrap prevents text wrapping
                className="nav-link text-white hover:text-gray-300 transition-colors duration-200 font-medium whitespace-nowrap"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Register Button: hidden md:flex hides on mobile/shows on desktop, items-center vertically centers, md:ml-8 lg:ml-12 xl:ml-20 responsive left margin only on desktop (0px on mobile → 32px → 48px → 80px) - ensures proper spacing in centered desktop layout */}
          <div className="hidden md:flex items-center md:ml-8 lg:ml-12 xl:ml-20">
            <Link
              href="#register"
              // bg-white white background, px-4 lg:px-6 xl:px-8 responsive horizontal padding (16px → 24px → 32px), py-1 vertical padding 4px, rounded-full fully rounded corners, flex items-center justify-center centers content, register-button applies animation CSS class, text-sm lg:text-base responsive text size (14px → 16px)
              className="bg-white px-4 lg:px-6 xl:px-8 py-1 rounded-full flex items-center justify-center register-button text-sm lg:text-base"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button: md:hidden shows only on mobile/tablet (hidden on desktop), positioned on the right side due to parent's justify-between layout */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              // p-2 adds 8px padding, rounded-md medium border radius, text-white white text color, hover:bg-white/10 semi-transparent white background on hover, transition-colors duration-200 smooth color transition over 200ms
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle menu" // Accessibility: screen reader description
            >
              {/* SVG Icon: w-6 h-6 sets 24px size, fill="none" no fill color, stroke properties define line appearance, viewBox defines coordinate system, stroke="currentColor" uses parent text color */}
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Conditional icon rendering: X icon when menu is open, hamburger icon when closed */}
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" /> // X icon paths
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon paths (3 horizontal lines)
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation: Conditional rendering - only shows when isMenuOpen is true */}
        {isMenuOpen && (
          // md:hidden ensures mobile menu only shows on mobile/tablet devices
          <div className="md:hidden">
            {/* Mobile menu container: px-2 horizontal padding 8px, pt-2 top padding 8px, pb-3 bottom padding 12px, space-y-1 vertical spacing 4px between children, bg-[#2a4a6b] custom dark blue background, rounded-lg large border radius, mt-2 top margin 8px */}
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2a4a6b] rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  // nav-link applies custom CSS class, block makes full-width clickable area, px-3 py-2 padding 12px horizontal 8px vertical, text-white white text, hover:text-gray-300 gray text on hover, hover:bg-white/10 semi-transparent background on hover, rounded-md medium border radius, font-medium medium font weight, transition-colors duration-200 smooth color transition
                  className="nav-link block px-3 py-2 text-white hover:text-gray-300 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
                  onClick={closeMenu} // Closes mobile menu when nav item is clicked
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Register Button Container: pt-2 adds top padding 8px for separation */}
              <div className="pt-2">
                <Link
                  href="#register"
                  // block full-width element, w-full takes full width, text-center centers text, bg-green-500 green background, hover:bg-green-600 darker green on hover, text-white white text, px-3 py-2 padding 12px horizontal 8px vertical, rounded-full fully rounded corners, font-medium medium font weight, transition-colors duration-200 smooth color transition
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full font-medium transition-colors duration-200"
                  onClick={closeMenu} // Closes mobile menu when register button is clicked
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
