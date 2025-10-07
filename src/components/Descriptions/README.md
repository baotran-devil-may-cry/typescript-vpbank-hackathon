# Descriptions Component

The Descriptions component displays the main content section of the VPBank Technology Hackathon 2025 website, featuring information about the hackathon tracks, experience offerings, and promotional content.

## Features

- **Responsive Design**: Adapts to different screen sizes with mobile-first approach
- **Gradient Background**: Uses Tailwind CSS gradient from teal-700 to green-700
- **Interactive Elements**: Hover effects on icons and images
- **Structured Content**: Organized sections for tracks and experience points
- **Accessibility**: Proper semantic HTML and alt text for images

## Usage

```tsx
import Descriptions from '@/components/Descriptions';

export default function HomePage() {
  return (
    <div>
      <Descriptions />
    </div>
  );
}
```

## Structure

The component consists of:

1. **Main Title**: "Season 2 Comes Back"
2. **Subtitle**: Brief description of VPBank Technology Hackathon 2025
3. **Track Information**:
   - Junior/Fresh Track details
   - Senior & Expert Track details
4. **Experience Points**: List of benefits and opportunities
5. **Hero Image**: Promotional image showing technology professionals

## Styling

- Uses custom CSS classes for typography and animations
- Implements Tailwind CSS for layout and responsive design
- Features floating animation for background decorative elements
- Includes hover effects for interactive elements
- Text stroke effects using `-webkit-text-stroke` for enhanced typography
- Comprehensive text shadow effects for depth and visual impact
- Responsive text wrapping: `nowrap` on desktop, `normal` on tablet/mobile

## Dependencies

- Next.js Image component for optimized image loading
- Tailwind CSS for styling
- Custom CSS for specific animations and typography

## Responsive Breakpoints

- Mobile: ≤ 768px (text wrapping enabled)
- Tablet: 769px - 1023px (text wrapping enabled)
- Desktop: 1024px - 1279px (single-line text)
- Large Desktop: ≥ 1280px (single-line text)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast
- Keyboard navigation support
- Responsive text wrapping prevents horizontal overflow on small screens
