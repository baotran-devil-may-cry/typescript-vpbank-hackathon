# Footer Component

## Overview

The Footer component provides the bottom section for the VPBank Technology Hackathon 2025 website. It features a blue gradient background with the event title, contact information, and social media links.

## ✨ Key Features

- **Blue Gradient Background**: Blue-800 to Blue-600 gradient matching VPBank branding
- **Responsive Design**: Mobile-first approach with responsive text and spacing
- **Social Media Integration**: Facebook, LinkedIn, and Email contact links
- **Centered Layout**: All content centered for professional appearance
- **Smooth Animations**: Hover effects with color transitions and subtle transforms
- **Accessibility**: Proper ARIA labels and semantic HTML structure

## Implementation Details

### Social Links Configuration

```typescript
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
```

## Styling Approach

### Responsive Breakpoints

- **Mobile**: Default styles (< 640px)
- **Small**: `sm:` prefix styles (≥ 640px)
- **Large**: `lg:` prefix styles (≥ 1024px)

### Color Scheme

- **Background**: Gradient `bg-gradient-to-r from-blue-800 to-blue-600`
- **Text**: White primary (`text-white`)
- **Hover States**: Blue-200 (`hover:text-blue-200`)
- **Transitions**: 200ms smooth color transitions

### Layout Structure

```text
Footer (gradient background)
├── Container (max-width, responsive padding)
│   └── Content Container (centered, responsive padding)
│       ├── Main Title (VPBANK TECHNOLOGY HACKATHON 2025)
│       └── Contact Section
│           ├── Contact Label
│           └── Social Links Container (flex, centered)
│               ├── Facebook Link (icon + text)
│               ├── LinkedIn Link (icon + text)
│               └── Email Link (icon + text)
```

## Responsive Behavior

### Desktop (≥ 1024px)

- **Title**: Large text size (`text-3xl`)
- **Contact**: Larger text (`text-xl`)
- **Social Links**: Base text size with larger icons
- **Spacing**: Generous padding and margins

### Mobile (< 640px)

- **Title**: Smaller text size (`text-2xl`)
- **Contact**: Smaller text (`text-lg`)
- **Social Links**: Text hidden on very small screens, icons only
- **Spacing**: Compact padding and margins
- **Layout**: Flexible wrapping for social links

## Accessibility Features

- **External Links**: Proper `target="_blank"` and `rel="noopener noreferrer"`
- **Semantic HTML**: Proper heading hierarchy and structure
- **Color Contrast**: High contrast white text on dark blue background
- **Keyboard Navigation**: All links are keyboard accessible
- **Screen Reader Support**: Meaningful link text and labels

## Animation Details

- **Hover Effects**: 200ms color transitions (`transition-colors duration-200`)
- **Transform**: Subtle upward movement on hover (`translateY(-1px)`)
- **Icon Scaling**: Responsive icon sizes (`w-5 h-5 lg:w-6 lg:h-6`)

## Props Interface

```typescript
// No props required - component is self-contained
interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
```

## Usage Example

```tsx
import Footer from '@/components/Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

## File Structure

```text
src/components/Footer/
├── Footer.tsx          # Main component file
├── Footer.css          # Custom CSS for Montserrat font and animations
├── index.ts            # Export file
└── README.md           # This documentation
```

## Technical Implementation

### CSS Classes Used

```css
/* Footer Container */
.footer {
  background: linear-gradient(to right, #1e40af, #2563eb);  /* from-blue-800 to-blue-600 */
}

/* Footer Title */
.footer-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Social Links */
.social-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.social-link:hover {
  color: rgb(191, 219, 254);  /* blue-200 */
  transform: translateY(-1px);
}
```

## Performance Considerations

- **SVG Icons**: Inline SVG icons for optimal performance
- **CSS Transitions**: Hardware-accelerated transitions
- **Responsive Images**: Scalable vector icons for all screen sizes
- **Minimal Dependencies**: Self-contained component with no external dependencies
