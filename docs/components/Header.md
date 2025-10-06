# Header Component

## Overview

The Header component provides the main navigation for the VPBank Technology Hackathon 2025 website. It features a responsive design with a fixed position that adapts to scroll behavior and includes both desktop and mobile navigation patterns.

## Features

- **Fixed Position**: Stays at the top of the page during scroll
- **Scroll-based Styling**: Changes appearance when user scrolls down
- **Responsive Design**: Desktop navigation menu and mobile hamburger menu
- **VPBank Branding**: Includes VPBank logo with proper styling
- **Smooth Animations**: CSS transitions for all interactive elements
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Implementation Details

### State Management

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

- `isMenuOpen`: Controls mobile menu visibility
- `isScrolled`: Tracks scroll position to change header appearance

### Scroll Detection

The component uses a scroll event listener to detect when the user has scrolled more than 50px from the top:

```typescript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Navigation Items

Navigation is defined as an array of objects for easy maintenance:

```typescript
const navItems: NavItem[] = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Lịch trình', href: '#timeline' },
  { label: 'Thử thách', href: '#challenges' },
  { label: 'Giải thưởng', href: '#prizes' },
  { label: 'Đăng ký', href: '#registration' },
  { label: 'FAQ', href: '#faq' },
];
```

## Styling Approach

### Responsive Breakpoints

- **Mobile**: Default styles (< 1024px)
- **Desktop**: `lg:` prefix styles (≥ 1024px)

### Color Scheme

- **Transparent State**: Transparent background with white text
- **Scrolled State**: White background with backdrop blur and shadow
- **VPBank Green**: `#00A651` for logo and CTA button

### Layout Structure

```
Header (fixed, full-width)
├── Container (max-width with padding)
│   ├── Logo (flex-shrink-0)
│   ├── Desktop Navigation (hidden on mobile)
│   ├── CTA Button (hidden on mobile)
│   └── Mobile Menu Button (hidden on desktop)
└── Mobile Navigation Menu (conditional render)
```

## Props Interface

```typescript
// No props required - component is self-contained
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

## Responsive Behavior

### Desktop (≥ 1024px)
- Horizontal navigation menu visible
- CTA button visible
- Mobile menu button hidden
- Logo larger size

### Mobile (< 1024px)
- Navigation menu hidden
- Hamburger menu button visible
- CTA button hidden (available in mobile menu)
- Logo smaller size
- Mobile menu slides down when opened

## Accessibility Features

- **ARIA Labels**: Menu button has proper `aria-label`
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Proper focus states for all interactive elements
- **Screen Reader Support**: Semantic HTML structure

## Animation Details

- **Scroll Transition**: 300ms ease transition for background changes
- **Menu Toggle**: Smooth icon transition between hamburger and X
- **Hover Effects**: 200ms color transitions on navigation items
- **Mobile Menu**: Smooth slide-down animation with backdrop blur

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Backdrop blur requires modern browser support
- Graceful degradation for older browsers

## Performance Considerations

- Event listener cleanup in useEffect
- Minimal re-renders with proper state management
- CSS transitions instead of JavaScript animations
- Optimized SVG logo for fast loading
