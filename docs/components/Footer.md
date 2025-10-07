# Footer Component

## Overview

The Footer component provides the bottom section for the VPBank Technology Hackathon 2025 website. It features a teal-to-green gradient background matching the header, with the event title, contact information, and social media links with custom styling.

## ✨ Key Features

- **Gradient Background**: Teal-700 to Green-700 gradient matching VPBank header branding
- **Custom Typography**: Montserrat font family with specific font weights and sizes
- **Sticky Footer**: Always positioned at the bottom of the page using flexbox layout
- **Social Media Integration**: Facebook, LinkedIn, and Email contact links with custom icons
- **Color-coded Elements**: Light blue icons with white text and light green hover effects
- **Responsive Design**: Mobile-first approach with responsive spacing and text sizing
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

### Typography Specifications

- **Main Title**: Custom font family with bright green color (`rgb(57, 255, 146)`)
- **Contact Title**: Montserrat font, 600 weight, 15px size (`0.9375rem`)
- **Social Links**: Montserrat font, 500 weight, 15px size with custom colors

## Styling Approach

### Responsive Breakpoints

- **Mobile**: Default styles (< 640px)
- **Small**: `sm:` prefix styles (≥ 640px)
- **Large**: `lg:` prefix styles (≥ 1024px)

### Color Scheme

- **Background**: Gradient `bg-gradient-to-r from-teal-700 to-green-700`
- **Main Title**: Bright green (`rgb(57, 255, 146)`)
- **Contact Title**: White (`rgb(255, 255, 255)`)
- **Social Link Text**: White (`rgb(255, 255, 255)`)
- **Social Link Icons**: Light blue (`rgb(147, 197, 253)`)
- **Hover Text**: Light green (`rgb(134, 239, 172)`)

### Layout Structure

```text
Footer (gradient background, sticky bottom)
├── Container (max-width, responsive padding)
│   └── Content Container (centered, responsive padding)
│       ├── Main Title (VPBANK TECHNOLOGY HACKATHON 2025)
│       └── Contact Section
│           ├── Contact Label (22px font-size)
│           └── Social Links Container (flex, centered)
│               ├── Facebook Link (light blue icon + white text)
│               ├── LinkedIn Link (light blue icon + white text)
│               └── Email Link (light blue icon + white text)
```

## Responsive Behavior

### Desktop (≥ 1024px)

- **Title**: Large text size (`text-3xl`)
- **Contact**: 22px font size
- **Social Links**: 15px text size with larger icons
- **Spacing**: Generous padding and margins (`py-12`, `mb-8`)

### Mobile (< 640px)

- **Title**: Smaller text size (`text-2xl`)
- **Contact**: Same 22px font size
- **Social Links**: Text hidden on very small screens, icons only
- **Spacing**: Compact padding and margins (`py-8`, `mb-6`)
- **Layout**: Flexible wrapping for social links

## Sticky Footer Implementation

The Footer is implemented as a sticky footer using flexbox layout in the main page structure:

```tsx
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">
    {/* Main content */}
  </main>
  <Footer />
</div>
```

### How It Works

- **`min-h-screen`**: Ensures container takes full viewport height
- **`flex flex-col`**: Creates vertical flexbox layout
- **`flex-1` on main**: Makes content area expand to fill available space
- **Footer**: Always appears at bottom, regardless of content length

## Custom CSS Classes

### Footer Title

```css
.footer-title {
  font-family: aGyeXplbileHRyYSibxkLnRZg;
  line-height: 1.6;
  color: rgb(57, 255, 146);
  text-align: center;
}
```

### Contact Title

```css
.contact-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.6;
  color: rgb(255, 255, 255);
  font-size: 0.9375rem; /* 15px */
}
```

### Social Links

```css
.social-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.9375rem; /* 15px */
  line-height: 1.6;
  color: rgb(255, 255, 255); /* white text */
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

/* Light blue color for icons only */
.social-link svg {
  color: rgb(147, 197, 253); /* light blue icons */
}

.social-link:hover {
  color: rgb(134, 239, 172); /* light green hover */
  transform: translateY(-1px);
}
```

## Accessibility Features

- **External Links**: Proper `target="_blank"` and `rel="noopener noreferrer"`
- **Semantic HTML**: Proper heading hierarchy (`h2` for main title, `h3` for contact)
- **Color Contrast**: High contrast colors on dark gradient background
- **Keyboard Navigation**: All links are keyboard accessible
- **Screen Reader Support**: Meaningful link text and labels
- **ARIA Labels**: Descriptive labels for social media links

## Animation Details

- **Hover Effects**: 200ms color transitions (`transition: all 0.2s ease-in-out`)
- **Transform**: Subtle upward movement on hover (`translateY(-1px)`)
- **Icon Scaling**: Responsive icon sizes (`w-5 h-5 lg:w-6 lg:h-6`)
- **Color Transitions**: Smooth transitions between default and hover states

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
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

## File Structure

```text
src/components/Footer/
├── Footer.tsx          # Main component file
├── Footer.css          # Custom CSS for typography and colors
├── index.ts            # Export file
└── README.md           # Component documentation
```

## Technical Implementation

### Gradient Background

```css
background: linear-gradient(to right, #0f766e, #15803d);  /* from-teal-700 to-green-700 */
```

### Typography System

- **Main Title**: Custom font with bright green color
- **Contact Title**: Montserrat 600 weight, 15px size
- **Social Links**: Montserrat 500 weight, 15px size
- **Responsive**: Consistent sizing across breakpoints

### Color System

- **Primary**: Bright green for main title
- **Secondary**: White for text content
- **Accent**: Light blue for icons
- **Interactive**: Light green for hover states

## Performance Considerations

- **SVG Icons**: Inline SVG icons for optimal performance and customization
- **CSS Transitions**: Hardware-accelerated transitions for smooth animations
- **Responsive Design**: Efficient responsive implementation with Tailwind utilities
- **Minimal Dependencies**: Self-contained component with no external dependencies
- **Sticky Footer**: Efficient flexbox implementation for consistent layout
