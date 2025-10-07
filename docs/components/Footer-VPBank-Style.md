# Footer Component - VPBank Style Guide

## Overview

This document explains how to create the exact VPBank footer from the screenshot, step by step. This is a mentor guide for learning how to build professional corporate footers with sticky positioning and custom typography.

## Design Analysis

### What We're Building

From the screenshot, we can see:

- Blue gradient background (`from-teal-700 to-green-700`)
- Main title: "VPBANK TECHNOLOGY HACKATHON 2025" in bright green
- "Contact" section with 22px font size
- Social media links: Facebook, LinkedIn, Email
- Light blue icons with white text
- Light green hover effects
- Centered layout with proper spacing

## Step-by-Step Implementation

### Step 1: Basic Structure & Sticky Footer

```tsx
// Main layout structure
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-1">
    {/* Main content */}
  </main>
  <Footer />
</div>

// Footer component
<footer className="bg-gradient-to-r from-teal-700 to-green-700 text-white">
  <div className="container mx-auto px-4">
    <div className="py-8 lg:py-12 text-center">
      {/* Footer content */}
    </div>
  </div>
</footer>
```

**Key Learning Points:**

- `min-h-screen flex flex-col` - Creates full-height layout
- `flex-1` on main - Makes content area expand to fill space
- `bg-gradient-to-r from-teal-700 to-green-700` - Matches header gradient
- Sticky footer automatically positions at bottom

### Step 2: Main Title with Custom Typography

```tsx
<h2 className="footer-title text-2xl lg:text-3xl font-bold mb-6 lg:mb-4 tracking-wide">
  VPBANK TECHNOLOGY HACKATHON 2025
</h2>
```

```css
/* Custom CSS for main title */
.footer-title {
  font-family: aGyeXplbileHRyYSibxkLnRZg;
  line-height: 1.6;
  color: rgb(57, 255, 146);
  text-align: center;
}
```

**Key Learning Points:**

- Custom font family for brand consistency
- Bright green color (`rgb(57, 255, 146)`) for visual impact
- Responsive text sizing with `text-2xl lg:text-3xl`
- `tracking-wide` for letter spacing

### Step 3: Contact Section with Precise Typography

```tsx
<div className="mb-6 lg:mb-8">
  <h3 className="contact-title font-medium mb-4 lg:mb-6">
    Contact
  </h3>
  {/* Social links */}
</div>
```

```css
/* Custom CSS for contact title */
.contact-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.6;
  color: rgb(255, 255, 255);
  font-size: 0.9375rem; /* 15px */
}
```

**Key Learning Points:**

- Exact font size: `0.9375rem` (15px)
- Montserrat font for professional appearance
- Font weight 600 for proper hierarchy
- White color for contrast against gradient

### Step 4: Social Media Links with Custom Icons

```tsx
<div className="flex justify-center items-center space-x-6 lg:space-x-8 flex-wrap gap-y-4">
  {socialLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 text-sm lg:text-base"
    >
      {/* SVG Icons */}
      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Icon paths */}
      </svg>
      <span className="hidden sm:inline">{link.label}</span>
    </a>
  ))}
</div>
```

**Key Learning Points:**

- `flex justify-center` - Centers social links horizontally
- `space-x-6 lg:space-x-8` - Responsive spacing between links
- `flex-wrap gap-y-4` - Allows wrapping on small screens
- `hidden sm:inline` - Hides text on very small screens

### Step 5: Custom Social Link Styling

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

**Key Learning Points:**

- Separate colors for icons (`light blue`) and text (`white`)
- Light green hover effect (`rgb(134, 239, 172)`)
- Subtle transform animation (`translateY(-1px)`)
- Consistent 15px font size across all social links

## Color Palette Used

### Primary Colors

- **Footer Background**: `from-teal-700 to-green-700` (Gradient)
- **Main Title**: `rgb(57, 255, 146)` (Bright green)
- **Contact Title**: `rgb(255, 255, 255)` (White)
- **Social Icons**: `rgb(147, 197, 253)` (Light blue)

### Interactive Colors

- **Social Text**: `rgb(255, 255, 255)` (White)
- **Hover Text**: `rgb(134, 239, 172)` (Light green)
- **Hover Transform**: `translateY(-1px)` (Subtle lift)

## Typography System

### Font Families

- **Main Title**: `aGyeXplbileHRyYSibxkLnRZg` (Custom brand font)
- **Contact & Social**: `'Montserrat', sans-serif` (Professional web font)

### Font Sizes

- **Main Title**: `text-2xl lg:text-3xl` (24px/30px responsive)
- **Contact Title**: `0.9375rem` (15px exact)
- **Social Links**: `0.9375rem` (15px exact)

### Font Weights

- **Main Title**: `font-bold` (700)
- **Contact Title**: `font-weight: 600` (Semi-bold)
- **Social Links**: `font-weight: 500` (Medium)

## Responsive Behavior

### Desktop (1024px+)

- Full social link labels visible
- Larger spacing and padding (`py-12`, `space-x-8`)
- Larger icon sizes (`w-6 h-6`)
- Generous margins (`mb-8`)

### Tablet (640px - 1024px)

- Social link labels visible
- Medium spacing and padding
- Medium icon sizes (`w-5 h-5`)
- Balanced margins

### Mobile (<640px)

- Social link text hidden (`hidden sm:inline`)
- Icons only for space efficiency
- Compact spacing and padding (`py-8`, `space-x-6`)
- Flexible wrapping with `gap-y-4`

## Professional Tips

### 1. Sticky Footer Implementation

- Use flexbox layout with `min-h-screen flex flex-col`
- Apply `flex-1` to main content area
- Footer automatically sticks to bottom
- Works with any content length

### 2. Custom Typography

- Use exact pixel values with rem conversion
- Maintain consistent font families across sections
- Apply proper font weights for visual hierarchy
- Consider line-height for readability

### 3. Color Strategy

- Separate icon and text colors for visual interest
- Use brand-consistent gradient backgrounds
- Implement meaningful hover states
- Ensure proper contrast ratios

### 4. Icon Implementation

- Use inline SVG for customization and performance
- Apply `fill="currentColor"` for color inheritance
- Implement responsive icon sizing
- Provide proper accessibility attributes

## Accessibility Features

### ARIA and Semantic HTML

- Proper heading hierarchy (`h2` for main title, `h3` for contact)
- External link attributes (`target="_blank"`, `rel="noopener noreferrer"`)
- Meaningful link text and labels
- Keyboard navigation support

### Color Contrast

- High contrast white text on dark gradient
- Sufficient contrast for light blue icons
- Readable hover states with light green
- Accessible color combinations

## Testing Checklist

- [ ] Footer sticks to bottom on short content
- [ ] Footer appears after content on long pages
- [ ] Main title displays in bright green color
- [ ] Contact title shows at exactly 22px (15px in code)
- [ ] Social icons appear in light blue
- [ ] Social text appears in white
- [ ] Hover effects show light green color
- [ ] Icons scale properly on different screen sizes
- [ ] Text hides appropriately on mobile
- [ ] Gradient background matches header
- [ ] All links open correctly
- [ ] Accessibility features work properly

This footer component demonstrates professional corporate web development with exact brand matching, custom typography, and responsive design principles.
