'use client';

import './Footer.css';

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    label: 'Tuyển dụng VPBank',
    href: 'https://facebook.com/vpbank',
    icon: 'facebook'
  },
  {
    label: 'VPBank',
    href: 'https://linkedin.com/company/vpbank',
    icon: 'linkedin'
  },
  {
    label: 'tuyendung@vpbank.com.vn',
    href: 'mailto:tuyendung@vpbank.com.vn',
    icon: 'email'
  },
];

export default function Footer() {
  return (
    // Footer Container: bg-gradient-to-r creates horizontal gradient, from-blue-800 to-blue-600 sets gradient colors, text-white sets default text color
    <footer className="bg-gradient-to-r from-teal-700 to-green-700 text-white">
      {/* Container wrapper: container centers content with max-width, mx-auto centers horizontally, px-4 adds horizontal padding */}
      <div className="container mx-auto px-4">
        {/* Main content container: py-8 lg:py-12 responsive vertical padding, text-center centers all content */}
        <div className="py-8 lg:py-12 text-center">
          {/* Main title: footer-title applies custom CSS class with Montserrat font, text-2xl lg:text-3xl responsive text size, font-bold bold weight, mb-6 lg:mb-8 responsive bottom margin, tracking-wide letter spacing */}
          <h2 className="footer-title text-2xl lg:text-3xl font-bold mb-6 lg:mb-4 tracking-wide">
            VPBANK TECHNOLOGY HACKATHON 2025
          </h2>

          {/* Contact section: mb-6 lg:mb-8 responsive bottom margin */}
          <div className="mb-6 lg:mb-8">
            {/* Contact label: custom text-[22px] size, font-medium medium weight, mb-4 lg:mb-6 responsive bottom margin */}
            <h3 className="contact-title font-medium mb-4 lg:mb-6">
              Contact
            </h3>

            {/* Social links container: flex layout, justify-center centers items, items-center vertically centers, space-x-6 lg:space-x-8 responsive spacing between items, flex-wrap allows wrapping on small screens */}
            <div className="flex justify-center items-center space-x-6 lg:space-x-8 flex-wrap gap-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // social-link applies custom CSS class, flex items-center creates horizontal layout with vertical centering, space-x-2 adds spacing between icon and text, text-white white text, hover:text-blue-200 light blue on hover, transition-colors duration-200 smooth color transition, text-sm lg:text-base responsive text size
                  className="social-link flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
                >
                  {/* Social media icons: w-5 h-5 lg:w-6 lg:h-6 responsive icon size, fill="currentColor" uses parent text color */}
                  {link.icon === 'facebook' && (
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}

                  {link.icon === 'linkedin' && (
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}

                  {link.icon === 'email' && (
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 11.246 21.615 3.82h.749c.904 0 1.636.733 1.636 1.637z"/>
                    </svg>
                  )}

                  {/* Link text: hidden sm:inline hides text on very small screens, shows on small screens and up */}
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
