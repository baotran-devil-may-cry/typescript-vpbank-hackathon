// Directive to mark this component as a client-side component in Next.js 13+ App Router
// This enables the use of browser-specific features and interactivity
'use client';

// Import Next.js optimized Image component for automatic image optimization
import Image from 'next/image';
// Import component-specific CSS styles for custom styling and animations
import './Descriptions.css';

// TypeScript interface defining the structure for track and experience point data
// Ensures type safety and consistent data structure across the component
interface DescriptionsPoint {
  icon: string;      // URL string for the icon image
  title: string;     // Main title text for the point
  description: string; // Detailed description text for the point
}

// Static data array containing information about the two hackathon tracks
// Uses the DescriptionsPoint interface for type safety
const trackInfo: DescriptionsPoint[] = [
  {
    // CDN URL for the track icon image
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Title for the junior/fresh graduate track with timeline
    title: 'Junior / Fresh Track (May – August 2025)',
    // Detailed description of eligibility criteria for junior track
    description: 'For fresh graduates (with a minimum "Good" GPA) in IT, Data Science, and related fields, with less than 2 years of experience.'
  },
  {
    // Same icon used for consistency across both tracks
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Title for the senior/expert track with timeline
    title: 'Senior & Expert Track (September – December 2025)',
    // Detailed description of eligibility criteria for senior track
    description: 'For technology professionals with over 2 years of experience and a passion for building impactful technological solutions.'
  }
];

// Static data array containing the five key experience points/benefits of the hackathon
// Each point highlights a different aspect of what participants can expect
const experiencePoints: DescriptionsPoint[] = [
  {
    // Consistent icon URL used across all experience points
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // First benefit: flexibility in choosing technical challenges
    title: 'Choose your own technical challenge statement',
    // Continuation of the title, emphasizing banking domain focus
    description: 'in the banking domain and tackle it your way!'
  },
  {
    // Same icon for visual consistency
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Second benefit: access to expert guidance
    title: 'Expert mentorship:',
    // Details about the mentorship program with specific numbers
    description: 'Be guided throughout the competition by nearly 50 experienced experts from VPBank and AWS.'
  },
  {
    // Consistent icon usage
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Third benefit: monetary and sponsored rewards
    title: 'Exciting rewards:',
    // Specific mention of cash prizes and AWS benefits
    description: 'Win attractive cash prizes from VPBank and sponsored benefits from AWS.'
  },
  {
    // Same icon for uniformity
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Fourth benefit: direct hiring opportunities
    title: 'Hack2Hire in action:',
    // Specific job roles available through the program
    description: 'Gain a direct path to top-tier roles such as AI/Gen AI Engineer, DevOps Specialist, Cloud Expert, Project Manager at VPBank.'
  },
  {
    // Consistent icon for all points
    icon: 'https://w.ladicdn.com/5c7362c6c417ab07e5196b05/icon-23-20250520095931-xvnqy.png',
    // Fifth benefit: real-world project experience
    title: 'Work on huge real-life technical projects:',
    // Emphasis on the scale and real-world impact of projects (escaped apostrophe for string safety)
    description: 'Turn your ideas into reality by contributing directly to VPBank\'s million-dollar IT projects and take your Hackathon solution to the next level.'
  }
];

// Main functional component export - default export for easy importing
export default function Descriptions() {
  return (
    // Main section element with semantic HTML for accessibility
    // Tailwind classes: gradient background (teal to green), white text, relative positioning, hidden overflow
    <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white relative overflow-hidden">
      {/* Container div for responsive layout with auto margins and padding */}
      {/* Responsive padding: py-16 (4rem) on mobile, lg:py-24 (6rem) on large screens */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* CSS Grid layout: single column on mobile, 2 columns on large screens */}
        {/* Gap spacing: 12 (3rem) on mobile, 16 (4rem) on large screens, vertically centered items */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Column - Contains all text content */}
          {/* space-y-8 adds 2rem vertical spacing between child elements */}
          <div className="space-y-8">
            {/* Main Title Section */}
            {/* H1 for SEO and accessibility, custom CSS class for styling, Tailwind for font weight and line height */}
            <h1 className="descriptions-title font-bold leading-tight">
              Season 2 Comes Back
            </h1>

            {/* Subtitle Section */}
            {/* Container with vertical spacing between elements */}
            <div className="space-y-4">
              {/* Subtitle paragraph with custom CSS class and responsive text sizing */}
              {/* text-lg (1.125rem) on mobile, lg:text-xl (1.25rem) on large screens */}
              <p className="descriptions-subtitle text-lg lg:text-xl leading-relaxed">
                {/* Emphasized hackathon name with semibold font weight */}
                <span className="font-semibold">VPBank Technology Hackathon 2025</span> – An arena for passionate
                technology talents with breakthrough thinking and a desire to solve
                complex problems in the financial and banking industry
              </p>
            </div>

            {/* Track Information Section */}
            {/* Container with 1.5rem vertical spacing between track items */}
            <div className="space-y-6">
              {/* Map through trackInfo array to render each track dynamically */}
              {/* index parameter used as React key for list rendering optimization */}
              {trackInfo.map((track, index) => (
                // Individual track container with flexbox layout
                // items-start aligns items to top, space-x-4 adds 1rem horizontal spacing
                <div key={index} className="flex items-start space-x-4">
                  {/* Icon container with fixed dimensions and flexbox centering */}
                  {/* flex-shrink-0 prevents icon from shrinking, w-6 h-6 sets 24px dimensions */}
                  <div className="descriptions-icon flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {/* Next.js Image component for optimized loading and performance */}
                    {/* width/height props for aspect ratio, className for styling */}
                    <Image
                      src={track.icon}
                      alt="Track icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  {/* Text content container with vertical spacing */}
                  <div className="space-y-2">
                    {/* Track description paragraph with responsive text sizing and opacity */}
                    {/* opacity-90 creates subtle transparency for visual hierarchy */}
                    <p className="descriptions-track-text text-base lg:text-lg leading-relaxed opacity-90">
                      {/* Inline style for bold track title (could be moved to CSS) */}
                      <span style={{fontWeight: 'bold'}}>{track.title} </span>
                      - {track.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            {/* Container with vertical spacing and top padding for section separation */}
            {/* pt-6 adds 1.5rem top padding to separate from track section */}
            <div className="space-y-6 pt-6">
              {/* Experience section title with custom CSS class and responsive sizing */}
              {/* font-semibold for medium emphasis, responsive text sizing */}
              <p className="descriptions-experience-title text-lg lg:text-xl font-semibold">
                VPBank Technology Hackathon 2025 offers you an invaluable experience:
              </p>

              {/* Container for experience points with tighter vertical spacing */}
              {/* space-y-4 provides 1rem spacing between experience items */}
              <div className="space-y-4">
                {/* Map through experiencePoints array to render each benefit */}
                {/* Each point represents a key value proposition of the hackathon */}
                {experiencePoints.map((point, index) => (
                  // Individual experience point container with flexbox layout
                  // Same layout pattern as track items for consistency
                  <div key={index} className="flex items-start space-x-4">
                    {/* Icon container with consistent styling across all points */}
                    {/* Same dimensions and layout as track icons for visual consistency */}
                    <div className="descriptions-icon flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {/* Next.js Image component for experience point icons */}
                      {/* Descriptive alt text for accessibility */}
                      <Image
                        src={point.icon}
                        alt="Experience point icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    {/* Text content container with minimal vertical spacing */}
                    {/* space-y-1 provides 0.25rem spacing between title and description */}
                    <div className="space-y-1">
                      {/* Experience point title with semibold weight and responsive sizing */}
                      {/* Inline span for flexible text flow with description */}
                      <span className="descriptions-point-title font-semibold text-base lg:text-lg">
                        {point.title}
                      </span>
                      {/* Experience point description with opacity and left margin */}
                      {/* ml-1 adds small left margin, opacity-90 for visual hierarchy */}
                      <span className="descriptions-point-text text-base lg:text-lg opacity-90 ml-1">
                        {point.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          {/* Relative positioning container for image and decorative elements */}
          <div className="relative">
            {/* Main image container with custom CSS class for hover effects */}
            {/* relative positioning and z-10 to layer above background decorations */}
            <div className="descriptions-image-container relative z-10">
              {/* Hero image using Next.js Image component for optimization */}
              {/* CDN URL with 850x850 dimensions, descriptive alt text for accessibility */}
              <Image
                src="https://w.ladicdn.com/s850x850/5c7362c6c417ab07e5196b05/nam-nu-ngoi-20250520032102-tel5j.png"
                alt="VPBank Technology Hackathon 2025 - Technology professionals working together"
                width={850}
                height={850}
                // Responsive sizing: full width, auto height, contain object-fit for aspect ratio preservation
                className="w-full h-auto object-contain"
                // Priority loading for above-the-fold content optimization
                priority
              />
            </div>

            {/* Background decorative elements container */}
            {/* Absolute positioning to cover entire parent, negative z-index to layer behind image */}
            <div className="absolute inset-0 -z-10">
              {/* First decorative circle - largest, positioned top-right quadrant */}
              {/* w-32 h-32 = 8rem (128px), bg-white/5 = 5% white opacity */}
              <div className="descriptions-bg-circle absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
              {/* Second decorative circle - medium size, positioned bottom-left quadrant */}
              {/* w-24 h-24 = 6rem (96px), bg-white/3 = 3% white opacity */}
              <div className="descriptions-bg-circle absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/3 rounded-full"></div>
              {/* Third decorative circle - smallest, positioned center */}
              {/* w-16 h-16 = 4rem (64px), bg-white/4 = 4% white opacity */}
              <div className="descriptions-bg-circle absolute top-1/2 right-1/2 w-16 h-16 bg-white/4 rounded-full"></div>
            </div>
          </div>
        </div>
        {/* End of main grid container */}
      </div>
      {/* End of main content container */}

      {/* Background Pattern Overlay */}
      {/* Absolute positioned overlay covering entire section with low opacity */}
      {/* opacity-10 = 10% opacity for subtle background texture */}
      <div className="absolute inset-0 opacity-10">
        {/* Pattern div using custom CSS class for radial gradient dots */}
        {/* Full coverage with absolute positioning */}
        <div className="descriptions-pattern absolute top-0 left-0 w-full h-full"></div>
      </div>
    </section>
    // End of main section element
  );
  // End of component return statement
}
// End of Descriptions component function
