# Header Component - VPBank Style Guide

## Overview

This document explains how to create the exact VPBank header from the screenshot, step by step. This is a mentor guide for learning how to build professional corporate headers.

## Design Analysis

### What We're Building

From the screenshot, we can see:

- Dark blue/teal background (`#1e3a5f`)
- VPBank logo on the left (red square + text)
- "powered by aws" text next to logo
- Navigation: Overview, Timeline, Mentors
- Green "Register" button on the right
- Height: approximately 56px

## Step-by-Step Implementation

### Step 1: Basic Structure

```tsx
<header className="bg-[#1e3a5f] text-white">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-14">
      {/* Left: Logo + powered by aws */}
      {/* Center: Navigation */}
      {/* Right: Register button */}
    </div>
  </div>
</header>
```

**Key Learning Points:**

- `bg-[#1e3a5f]` - Custom Tailwind color for exact brand matching
- `flex items-center justify-between` - Creates horizontal layout with space distribution
- `h-14` - Sets header height (56px)

### Step 2: Left Section - Branding

```tsx
<div className="flex items-center space-x-3">
  {/* VPBank Logo */}
  <div className="flex items-center">
    <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mr-2">
      <span className="text-white text-xs font-bold">VP</span>
    </div>
    <span className="text-white font-bold text-lg">VPBank</span>
  </div>
  
  {/* Powered by AWS */}
  <div className="flex items-center text-sm text-gray-300">
    <span>powered by</span>
    <span className="ml-1 font-semibold text-orange-400">aws</span>
  </div>
</div>
```

**Key Learning Points:**

- `space-x-3` - Adds consistent spacing between logo and "powered by" text
- `bg-red-500 rounded-sm` - Creates the red square logo
- `text-orange-400` - AWS brand color for "aws" text
- `text-gray-300` - Subtle color for "powered by" text

### Step 3: Center Section - Navigation

```tsx
<nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
    >
      {item.label}
    </Link>
  ))}
</nav>
```

**Key Learning Points:**

- `hidden md:flex` - Hidden on mobile, visible on desktop (768px+)
- `space-x-8` - Generous spacing between navigation items
- `hover:text-gray-300` - Subtle hover effect
- `transition-colors duration-200` - Smooth color transitions

### Step 4: Right Section - CTA Button

```tsx
<div className="hidden md:flex items-center">
  <Link
    href="#register"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
  >
    Register
  </Link>
</div>
```

**Key Learning Points:**

- `bg-green-500` - Green color matching the screenshot
- `rounded-full` - Creates pill-shaped button
- `px-6 py-2` - Proper padding for button size
- `hover:bg-green-600` - Darker green on hover

### Step 5: Mobile Menu Implementation

```tsx
{/* Mobile menu button */}
<div className="md:hidden">
  <button
    onClick={toggleMenu}
    className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
    aria-label="Toggle menu"
  >
    {/* Hamburger/Close icon SVG */}
  </button>
</div>

{/* Mobile Navigation */}
{isMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2a4a6b] rounded-lg mt-2">
      {/* Mobile navigation items */}
    </div>
  </div>
)}
```

**Key Learning Points:**

- `md:hidden` - Only visible on mobile
- `bg-white/10` - Semi-transparent white for hover effect
- `bg-[#2a4a6b]` - Darker blue for mobile menu background
- `space-y-1` - Vertical spacing for mobile menu items

## Color Palette Used

### Primary Colors

- **Header Background**: `#1e3a5f` (VPBank dark blue)
- **Logo Red**: `#ef4444` (Tailwind red-500)
- **AWS Orange**: `#fb923c` (Tailwind orange-400)
- **Register Green**: `#10b981` (Tailwind green-500)

### Text Colors

- **Primary Text**: `white`
- **Secondary Text**: `#d1d5db` (Tailwind gray-300)
- **Hover States**: `#9ca3af` (Tailwind gray-400)

## Responsive Behavior

### Desktop (768px+)

- Full horizontal navigation visible
- Register button visible
- Logo and branding fully displayed

### Mobile (<768px)

- Navigation hidden, hamburger menu shown
- Register button moved to mobile menu
- Compact logo display

## Professional Tips

### 1. Exact Brand Matching

- Always use exact hex colors from brand guidelines
- Use custom Tailwind colors with `bg-[#hexcode]` syntax
- Maintain proper contrast ratios for accessibility

### 2. Spacing and Typography

- Use consistent spacing scale (Tailwind's space utilities)
- Proper font weights for hierarchy (bold for logo, medium for nav)
- Adequate touch targets for mobile (minimum 44px)

### 3. Interactive States

- Always include hover states for better UX
- Use smooth transitions for professional feel
- Provide visual feedback for all interactive elements

### 4. Accessibility

- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast standards
- Use semantic HTML elements

## Testing Checklist

- [ ] Header displays correctly on desktop
- [ ] Mobile menu works properly
- [ ] All colors match the original design
- [ ] Hover effects work smoothly
- [ ] Logo and branding are properly aligned
- [ ] Register button is prominent and accessible
- [ ] Navigation items are properly spaced
- [ ] Responsive breakpoints work correctly

This header component demonstrates professional corporate web development with exact brand matching and responsive design principles.
