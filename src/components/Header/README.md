# Header Component Documentation

## Overview

The Header component is a fully responsive navigation bar for the VPBank Hackathon website, featuring brand logos, navigation menu, and an animated register button. Built with Next.js, TypeScript, and Tailwind CSS.

## File Structure

```text
components/Header/
├── Header.tsx          # Main React component with TypeScript
├── Header.css          # Custom styles and animations
└── README.md          # This documentation
```

## Component Architecture

### 1. **State Management**

```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

- **React Hook**: Uses `useState` for mobile menu toggle functionality
- **State Variable**: `isMenuOpen` - Boolean controlling mobile menu visibility
- **Reactive UI**: Component re-renders when state changes

### 2. **Navigation Data Structure**

```tsx
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Mentors', href: '#mentors' },
];
```

- **TypeScript Interface**: Ensures type safety and IntelliSense support
- **Scalable Design**: Easy to add/remove navigation items
- **Anchor Links**: Uses hash routing for single-page navigation

### 3. **Event Handlers**

```tsx
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
const closeMenu = () => setIsMenuOpen(false);
```

- **`toggleMenu`**: Switches mobile menu state (open ↔ closed)
- **`closeMenu`**: Always closes mobile menu (used when clicking nav items)
- **User Experience**: Automatic menu closure on navigation for better UX

## UI Layout Structure

### **Main Container**

```tsx
<header className="bg-gradient-to-r from-teal-700 to-green-700 text-white">
```

- Gradient background from teal to green
- Full-width header with white text

### **Content Layout (Responsive 3-Section Design)**

```tsx
<div className="flex items-center justify-between md:justify-center h-14 w-full px-4 lg:px-8">
```

- **Mobile/Tablet Layout**: `justify-between` spreads logos to left and menu button to right
- **Desktop Layout**: `md:justify-center` centers all content (logos, navigation, register button)
- Fixed height of 56px (h-14)
- Responsive horizontal padding: 16px on medium screens, 32px on large screens
- Adaptive layout prevents content overlap while optimizing space usage

#### **Left Section: Logos**

```tsx
<div className="flex items-center space-x-2 lg:space-x-3 md:mr-8 lg:mr-12 xl:mr-20">
```

- **VPBank Logo**: Responsive sizing (h-8 lg:h-10), auto width adjustment
- **AWS Logo**: Responsive sizing (h-7 lg:h-9) with top padding
- **Responsive spacing between logos**: 8px on medium, 12px on large screens
- **Adaptive positioning**:
  - **Mobile/Tablet**: Positioned on the left (no right margin)
  - **Desktop**: Centered with right margin (32px → 48px → 80px)
- **Layout behavior**: `md:mr-8 lg:mr-12 xl:mr-20` only applies margins on desktop screens

#### **Center Section: Navigation**

```tsx
<nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
```

- **Desktop Navigation**: Hidden on mobile, visible on medium+ screens
- **Responsive spacing between items**: 24px → 32px → 48px (medium → large → xl screens)
- **Whitespace control**: `whitespace-nowrap` prevents text wrapping on smaller screens
- **Mobile Navigation**: Conditional rendering based on `isMenuOpen` state

#### **Right Section: Register Button**

```tsx
<div className="hidden md:flex items-center md:ml-8 lg:ml-12 xl:ml-20">
```

- Hidden on mobile devices (available in mobile menu instead)
- **Desktop positioning**: `md:ml-8 lg:ml-12 xl:ml-20` adds left margin only on desktop
- **Adaptive left margin**: 32px → 48px → 80px (medium → large → xl screens)
- **Responsive button sizing**: Smaller padding and text on medium screens
- Maintains visual balance in centered desktop layout

## Navigation Items Styling

### **CSS Class Implementation**

Navigation links now use a dedicated CSS class instead of inline styles for better maintainability:

```css
.nav-link {
  display: inline-block;
  word-break: break-word;
  background-size: cover;
  background-position: center center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  line-height: 1.6;
  color: rgb(255, 255, 255);
  text-align: center;
}
```

### **Component Usage**

```tsx
<Link
  className="nav-link text-white hover:text-gray-300 transition-colors duration-200 font-medium whitespace-nowrap"
  href={item.href}
>
  {item.label}
</Link>
```

### **Style Explanation**

- **`display: inline-block`**: Allows precise control while maintaining inline flow
- **`wordBreak: break-word`**: Prevents text overflow by intelligently breaking long words
- **`backgroundSize: cover`**: Ensures background images scale to cover entire element
- **`backgroundPosition: center center`**: Centers background images both horizontally and vertically
- **`fontFamily: 'Montserrat, sans-serif'`**: Uses Google Fonts Montserrat with system fallback
- **`fontWeight: 'bold'`**: Bold typography for enhanced visibility and hierarchy
- **`lineHeight: '1.6'`**: Optimal line spacing for readability (1.6x font size)
- **`color: 'rgb(255, 255, 255)'`**: Pure white text for maximum contrast on dark background
- **`textAlign: 'center'`**: Centers text content within each navigation item

### **Design Decisions**

- **Content-based width**: Removed fixed width to allow natural text sizing
- **Typography hierarchy**: Bold Montserrat creates visual consistency with Register button
- **Accessibility**: High contrast white text ensures WCAG compliance
- **Responsive behavior**: Inline-block display adapts to different screen sizes

## Animations

### **Register Button Animation**

Located in `Header.css`:

```css
@keyframes scaleAnimation {
  0% {
    transform: scale(1);      /* Normal size */
  }
  50% {
    transform: scale(1.15);   /* 15% larger */
  }
  100% {
    transform: scale(1);      /* Back to normal */
  }
}

.register-button {
  animation: scaleAnimation 1.0s ease-in-out infinite;
}
```

### **Animation Details**

- **Type**: Scale transformation animation
- **Duration**: 1.0 second per cycle (optimized timing)
- **Timing Function**: `ease-in-out` for smooth acceleration/deceleration
- **Repetition**: Infinite loop for continuous attention
- **Scale Range**: 100% → 115% → 100% (noticeable but not overwhelming)
- **Performance**: Hardware-accelerated CSS transforms

### **Animation Benefits**

1. **Attention-grabbing**: Draws user focus to the primary CTA button
2. **Smooth motion**: Ease-in-out creates natural, professional movement
3. **Balanced visibility**: 15% scale increase is noticeable without being distracting
4. **Performance optimized**: CSS animations leverage GPU acceleration
5. **Accessibility friendly**: Respects user preferences for reduced motion

## Responsive Layout Improvements

### **Adaptive Spacing System**

The header uses a three-tier responsive spacing system to prevent content overlap while maintaining the centered design:

```tsx
// Spacing between sections
mr-8 lg:mr-12 xl:mr-20  // 32px → 48px → 80px
ml-8 lg:ml-12 xl:ml-20  // 32px → 48px → 80px

// Navigation item spacing
space-x-6 lg:space-x-8 xl:space-x-12  // 24px → 32px → 48px

// Logo spacing
space-x-2 lg:space-x-3  // 8px → 12px
```

### **Responsive Element Sizing**

- **Logo heights**: `h-8 lg:h-10` (32px → 40px)
- **Button padding**: `px-4 lg:px-6 xl:px-8` (16px → 24px → 32px)
- **Button text**: `text-sm lg:text-base` (14px → 16px)
- **Container padding**: `px-4 lg:px-8` (16px → 32px)

### **Breakpoint Strategy**

- **Mobile/Tablet (0-767px)**: Left-right positioning for optimal space usage
- **Medium (768px-1024px)**: Centered layout with compact spacing to prevent overlap
- **Large (1024px-1280px)**: Centered layout with balanced spacing for optimal readability
- **Extra Large (1280px+)**: Centered layout with generous spacing for premium desktop experience

### **Mobile Positioning Strategy**

The header uses a dual-layout approach that optimizes space usage across different device types:

```tsx
// Mobile: justify-between spreads logos left, menu button right
// Desktop: md:justify-center centers all content
className="flex items-center justify-between md:justify-center"

// Margins only apply on desktop to maintain centered layout
className="md:mr-8 lg:mr-12 xl:mr-20"  // Logo container
className="md:ml-8 lg:ml-12 xl:ml-20"  // Register button
```

**Benefits of This Approach:**

1. **Mobile Optimization**: Logos and menu button use full header width
2. **Desktop Elegance**: Centered layout maintains premium brand appearance
3. **Touch Accessibility**: Menu button positioned in natural thumb reach area
4. **Visual Balance**: Content distribution feels natural on each device type
5. **Brand Prominence**: Logos get maximum visibility on smaller screens

## Layout Comparison

### **Mobile/Tablet Layout (0-767px)**

```text
[VPBank AWS]                    [☰]
```

- **Left**: Logos positioned at left edge
- **Right**: Menu button positioned at right edge
- **Layout**: `justify-between` spreads content across full width
- **Spacing**: No margins between sections (full width utilization)

### **Desktop Layout (768px+)**

```text
        [VPBank AWS] [Nav Items] [Register]
```

- **Center**: All content centered as a group
- **Layout**: `md:justify-center` centers the entire content block
- **Spacing**: Responsive margins create balanced spacing between sections
- **Visual**: Premium centered appearance with generous whitespace

## Responsive Design

### **Desktop (md and above)**

- Full horizontal layout with all elements visible
- Navigation items in horizontal row
- Register button visible on the right
- Mobile menu button hidden

### **Mobile/Tablet (below md breakpoint)**

- **Left-Right Layout**: `justify-between` spreads content across full width
- **Left Side**: Logos positioned on the left edge
- **Right Side**: Hamburger menu button positioned on the right edge
- **Hidden Elements**: Desktop navigation and register button hidden
- **Available Actions**: Navigation and register available through mobile menu
- **Optimal Space Usage**: Maximizes usable space by utilizing full header width

### **Mobile Menu**

```tsx
{isMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2a4a6b] rounded-lg mt-2">
```

- **Conditional rendering**: Only shows when `isMenuOpen` is true
- **Styling**: Dark blue background with rounded corners
- **Layout**: Vertical stack with spacing between items
- **Register button**: Full-width green button at bottom

## Accessibility Features

### **Mobile Menu Button**

```tsx
<button
  onClick={toggleMenu}
  className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
  aria-label="Toggle menu"
>
```

- **`aria-label`**: Provides screen reader description
- **Hover states**: Visual feedback on interaction
- **Keyboard accessible**: Can be activated with Enter/Space
- **Optimal positioning**: Right-side placement follows mobile UX conventions
- **Touch target**: 40px minimum size (p-2 + icon) meets accessibility guidelines

### **Navigation Links**

- **Semantic HTML**: Uses proper `<nav>` and `<Link>` elements
- **Hover states**: Visual feedback for all interactive elements
- **Focus states**: Keyboard navigation support
- **Color contrast**: White text on dark background meets WCAG guidelines

## Performance Optimizations

1. **Image Optimization**: Next.js Image component with priority loading
2. **CSS Animations**: Hardware-accelerated transforms
3. **Conditional Rendering**: Mobile menu only renders when needed
4. **Efficient State Updates**: Minimal re-renders with focused state changes

## Browser Compatibility

- **Modern browsers**: Full support for CSS Grid, Flexbox, and transforms
- **Fallbacks**: Sans-serif font fallback for Montserrat
- **Progressive enhancement**: Core functionality works without JavaScript
