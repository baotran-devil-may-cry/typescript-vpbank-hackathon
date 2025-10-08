# Header Component

## Overview

The Header component provides the main navigation for the VPBank Technology Hackathon 2025 website. It features a sophisticated responsive design with VPBank branding, AWS partnership logo, and an innovative mobile navigation system.

## ✨ Key Features

- **Dual Logo Display**: VPBank and AWS logos with responsive sizing
- **Gradient Background**: Teal-700 to Green-700 gradient matching VPBank branding
- **Sticky Navigation**: Header and divider remain visible when scrolling for persistent access
- **Responsive Navigation**: Desktop centered layout with mobile toggle menu
- **Mobile Innovation**: Horizontal overlay menu with inline close button
- **Perfect Alignment**: Toggle and close buttons vertically aligned with identical sizes
- **Smooth Animations**: 200ms transitions for all interactive elements
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Visual Continuity**: Sticky divider maintains design integrity during scroll

## Implementation Details

### State Management

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

- `isMenuOpen`: Controls mobile menu visibility and toggle state

### Navigation Items

Navigation is defined as an array of objects for easy maintenance:

```typescript
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

### Menu Control Functions

```typescript
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};
```

## Styling Approach

### Responsive Breakpoints

- **Mobile/Tablet**: Default styles (< 768px)
- **Desktop**: `md:` prefix styles (≥ 768px)
- **Large Desktop**: `lg:` and `xl:` prefix styles (≥ 1024px, ≥ 1280px)

### Color Scheme

- **Background**: Gradient `bg-gradient-to-r from-teal-700 to-green-700`
- **Text**: White primary (`text-white`)
- **Hover States**: Gray-300 (`hover:text-gray-300`)
- **Button Hover**: Semi-transparent white (`hover:bg-white/10`)

### Sticky Positioning

The header and its divider use CSS sticky positioning to remain visible during page scrolling:

#### Header Implementation

```tsx
<header className="sticky top-0 z-50 relative">
```

#### Divider Implementation

```tsx
<div className="sticky top-14 z-40 h-px bg-gradient-to-r from-transparent via-green-800 to-transparent">
```

**Implementation Details:**

- **Header `sticky top-0 z-50`**: Header sticks to top of viewport with highest priority
- **Divider `sticky top-14 z-40`**: Divider sticks 56px from top (header height), below header
- **`relative`**: Maintains relative positioning for mobile menu overlay
- **Layered Z-Index**: Header (50) > Divider (40) > Content ensures proper stacking

**Benefits:**

- **Enhanced UX**: Navigation and visual separator always accessible
- **Performance**: More efficient than JavaScript scroll listeners
- **Responsive**: Works seamlessly across all device sizes
- **Accessibility**: Consistent navigation access improves usability
- **Visual Continuity**: Divider maintains design integrity during scroll
- **Professional Appearance**: Seamless header-divider connection while scrolling

### Layout Structure

```text
Header (relative positioning, gradient background)
├── Container (max-width, responsive padding)
│   ├── Main Flex Container (justify-between on mobile, justify-center on desktop)
│   │   ├── Logo Section (VPBank + AWS logos)
│   │   ├── Desktop Navigation (hidden on mobile, centered on desktop)
│   │   ├── Register Button (hidden on mobile, visible on desktop)
│   │   └── Mobile Menu Button (visible on mobile, hidden on desktop)
│   └── Mobile Navigation Menu (absolute positioned overlay)
│       └── Flex Container (justify-between)
│           ├── Navigation Items (centered with flex-1)
│           └── Close Button (right aligned)
```

## Mobile Navigation Innovation

### Critical Mobile Text Wrapping Fix

**Problem Identified**: Navigation items were wrapping to multiple lines on mobile devices, causing unprofessional text breaking:
- "Overview" became "Overvie w"
- "Timeline" became "Timelin e"
- "Mentors" became "Mentor s"

**Solution Implemented**: Enhanced spacing and text protection system

### Enhanced Mobile Spacing System

**Spacing Optimization**:
```tsx
// BEFORE: Cramped spacing causing text wrapping
<div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 flex-1 px-2">

// AFTER: Optimized spacing for better mobile experience
<div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10 flex-1 px-2">
```

**Spacing Breakdown**:
- **Mobile (default)**: `space-x-6` = 24px between navigation items
- **Small screens (640px+)**: `space-x-8` = 32px between items
- **Medium+ screens (768px+)**: `space-x-10` = 40px between items

**Benefits**:
- Meets accessibility guidelines (44px minimum touch targets)
- Prevents accidental taps on adjacent navigation items
- Creates professional visual hierarchy across all screen sizes

### Horizontal Overlay Design

Unlike traditional vertical mobile menus, this implementation features:

- **Horizontal Layout**: Navigation items displayed in a row, not stacked vertically
- **Enhanced Spacing**: Progressive spacing system prevents text wrapping
- **Inline Close Button**: Close button positioned alongside navigation items, not in header
- **Visual Continuity**: Same gradient background creates seamless experience
- **Space Efficiency**: Compact horizontal layout maximizes screen real estate

### User Experience Benefits

1. **Professional Appearance**: Text never wraps to multiple lines
2. **Familiar Pattern**: Horizontal navigation matches desktop experience
3. **Easy Access**: Close button within reach of navigation items
4. **Visual Consistency**: Gradient background maintains brand identity
5. **Touch Friendly**: Large touch targets with enhanced spacing

### Implementation Highlights

```tsx
{/* Mobile Navigation Overlay - Enhanced with improved spacing */}
{isMenuOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 z-[60]">
    <div className="bg-gradient-to-r from-teal-700 to-green-700 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Container with responsive padding for better mobile layout */}
        <div className="flex justify-between items-center py-6 px-2 sm:px-4 lg:px-8">
          {/* Navigation items with enhanced spacing system */}
          <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10 flex-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm sm:text-base md:text-lg whitespace-nowrap text-center flex-shrink-0 px-2"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Inline Close Button */}
          <button onClick={closeMenu} className="text-white hover:text-gray-300 hover:bg-white/10 transition-colors duration-200 p-2 rounded-md mr-4" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
)}
```

**Key Enhancements Explained**:

1. **Enhanced Spacing**: `space-x-6 sm:space-x-8 md:space-x-10` provides progressive spacing
2. **Responsive Typography**: `text-sm sm:text-base md:text-lg` prevents overflow on small screens
3. **Text Protection**: `whitespace-nowrap` ensures text never wraps to multiple lines
4. **Flex Protection**: `flex-shrink-0` prevents navigation items from shrinking
5. **Touch Targets**: `px-2` adds padding for better mobile usability
6. **Container Optimization**: `px-2 sm:px-4 lg:px-8` maximizes space on mobile

## Props Interface

```typescript
// No props required - component is self-contained
interface NavItem {
  label: string;
  href: string;
}
```

## Usage Example

```tsx
import Header from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
```

## File Structure

```text
src/components/Header/
├── Header.tsx          # Main component file
├── Header.css          # Custom CSS for Montserrat font
└── README.md           # This documentation
```

## Responsive Behavior

### Desktop (≥ 768px)

- **Layout**: Centered navigation with logos on left, nav items center, register button right
- **Navigation**: Full horizontal navigation menu visible (`hidden md:flex`)
- **Register Button**: Visible with white background and rounded corners
- **Mobile Menu**: Hidden (`md:hidden`)
- **Logo Sizing**: Larger responsive sizes (`h-8 lg:h-10`, `h-7 lg:h-9`)

### Mobile/Tablet (< 768px)

- **Layout**: Logos left, hamburger menu right (`justify-between`)
- **Navigation**: Hidden, replaced with toggle menu button
- **Register Button**: Hidden (not available in mobile menu)
- **Mobile Menu**: Hamburger icon visible
- **Logo Sizing**: Smaller base sizes with responsive scaling

### Mobile Menu Overlay

When `isMenuOpen` is true:

- **Positioning**: Absolute overlay (`absolute top-full left-0 right-0 z-50`)
- **Background**: Same gradient as header for visual continuity
- **Layout**: Horizontal navigation items with inline close button
- **Navigation Items**: Centered with `flex-1` and `justify-center`
- **Close Button**: Right-aligned with `mr-4` margin for perfect alignment
- **Container Structure**: Matches header padding for vertical alignment

## Button Alignment System

### Perfect Vertical Alignment

Both toggle and close buttons are precisely aligned using:

- **Container Structure**: Same `container mx-auto px-4` wrapper
- **Responsive Padding**: Identical `px-4 lg:px-8` padding
- **Right Margin**: Both buttons use `mr-4` (16px) for consistent positioning
- **Button Sizing**: Identical `p-2` padding and `w-6 h-6` icon sizes
- **Hover Areas**: Same `40px × 40px` clickable area with `rounded-md`

### Button Specifications

```css
/* Both Toggle and Close Buttons */
.button-shared {
  padding: 8px;                    /* p-2 */
  margin-right: 16px;              /* mr-4 */
  border-radius: 6px;              /* rounded-md */
  transition: colors 200ms;        /* transition-colors duration-200 */
}

.button-shared:hover {
  background-color: rgba(255, 255, 255, 0.1);  /* hover:bg-white/10 */
  color: rgb(209, 213, 219);                    /* hover:text-gray-300 */
}

.button-icon {
  width: 24px;                     /* w-6 */
  height: 24px;                    /* h-6 */
  stroke-width: 2;
}
```

## Accessibility Features

- **ARIA Labels**: Both menu buttons have proper `aria-label` attributes
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Proper focus states for all interactive elements
- **Screen Reader Support**: Semantic HTML structure with meaningful labels
- **Color Contrast**: High contrast white text on dark gradient background

## Animation Details

- **Hover Transitions**: 200ms smooth color transitions (`transition-colors duration-200`)
- **Button States**: Consistent hover effects across toggle and close buttons
- **Icon Consistency**: Same stroke width and styling for all icons
- **No Animation Conflicts**: Simple, reliable CSS transitions

## Technical Implementation

### CSS Classes Used

```css
/* Header Container */
.header {
  background: linear-gradient(to right, #0f766e, #15803d);  /* from-teal-700 to-green-700 */
  position: sticky;                                          /* sticky positioning */
  top: 0;                                                   /* stick to top of viewport */
  z-index: 50;                                              /* layer above content and divider */
}

/* Header Divider */
.header-divider {
  position: sticky;                                          /* sticky positioning */
  top: 56px;                                                /* stick below header (h-14 = 56px) */
  z-index: 40;                                              /* layer below header, above content */
  height: 1px;                                              /* thin line */
  background: linear-gradient(to right, transparent, #166534, transparent); /* green gradient */
}

/* Mobile Menu Overlay */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 60;                                              /* layer above sticky header */
  background: linear-gradient(to right, #0f766e, #15803d);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Navigation Items */
.nav-link {
  font-family: 'Montserrat', sans-serif;  /* Custom CSS class */
  font-weight: 500;
  font-size: 1.125rem;                     /* text-lg on mobile */
}
```

## Performance Considerations

- **No Scroll Listeners**: Simplified implementation without scroll detection
- **Minimal State**: Only `isMenuOpen` state for optimal re-renders
- **CSS Transitions**: Hardware-accelerated transitions instead of JavaScript animations
- **Optimized Images**: Next.js Image component with priority loading for logos
- **Efficient Rendering**: Conditional rendering for mobile menu overlay
