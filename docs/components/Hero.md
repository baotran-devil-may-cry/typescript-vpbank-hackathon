# Hero Component

## Overview

The Hero component serves as the main landing section of the VPBank Technology Hackathon 2025 website. It features a full-screen design with an animated background, countdown timer, and prominent call-to-action buttons.

## Features

- **Full-screen Layout**: Takes up the entire viewport height
- **Animated Background**: Gradient background with floating animated elements
- **Real-time Countdown**: Live countdown timer to the hackathon start date
- **Responsive Design**: Adapts to all screen sizes with appropriate text scaling
- **Call-to-Action Buttons**: Primary and secondary action buttons
- **Event Highlights**: Key statistics displayed in cards
- **Scroll Indicator**: Animated arrow indicating more content below

## Implementation Details

### Countdown Timer Logic

The component implements a real-time countdown timer using React hooks:

```typescript
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const [timeLeft, setTimeLeft] = useState<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
```

The timer updates every second and calculates the remaining time until the target date:

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);
```

### Background Animation

The hero section features multiple layers of animation:

1. **Gradient Background**: CSS gradient from green to blue to purple
2. **Floating Elements**: Animated circles with blur effects and pulse animation
3. **Tech Pattern**: SVG pattern overlay with geometric shapes
4. **Backdrop Blur**: Modern glass-morphism effect on countdown cards

## Styling Approach

### Color Scheme

- **Primary Gradient**: Green (#00A651) → Blue → Purple
- **Accent Color**: Yellow (#FCD34D) for primary CTA
- **Text Colors**: White with varying opacity levels
- **Glass Effect**: White with 10-20% opacity and backdrop blur

### Typography Hierarchy

```css
/* Main Title */
text-4xl sm:text-5xl lg:text-7xl font-bold

/* Subtitle */
text-xl sm:text-2xl lg:text-3xl font-light

/* Description */
text-lg sm:text-xl lg:text-2xl

/* Countdown Numbers */
text-3xl sm:text-4xl lg:text-5xl font-bold
```

### Layout Structure

```text
Hero Section (full-screen)
├── Background Layer
│   ├── Gradient Background
│   ├── Animated Floating Elements
│   └── Tech Pattern Overlay
└── Content Layer
    ├── Main Title & Subtitle
    ├── Countdown Timer Grid
    ├── CTA Buttons
    ├── Event Info Cards
    └── Scroll Indicator
```

## Props Interface

```typescript
// No props required - component is self-contained
// Target date is configured internally
```

## Usage Example

```tsx
import Hero from '@/components/Hero/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* Other sections */}
    </div>
  );
}
```

## Responsive Behavior

### Mobile (< 640px)

- Single column layout for countdown timer (2x2 grid)
- Smaller text sizes
- Stacked CTA buttons
- Reduced padding and margins

### Tablet (640px - 1024px)

- Four-column countdown timer
- Medium text sizes
- Side-by-side CTA buttons
- Balanced spacing

### Desktop (≥ 1024px)

- Large text sizes for maximum impact
- Spacious layout with generous margins
- Enhanced animations and effects

## Animation Details

### Countdown Timer

- Real-time updates every second
- Smooth number transitions
- Zero-padding for consistent layout

### Background Animations

- **Pulse Effect**: Floating circles with staggered animation delays
- **Bounce Animation**: Scroll indicator with infinite bounce
- **Hover Effects**: Scale transforms on CTA buttons (105% scale)

### CSS Animation Classes

```css
/* Custom animation delays */
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

/* Hover transforms */
.hover:scale-105 { transform: scale(1.05); }
```

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy (h1, h2)
- **Color Contrast**: High contrast white text on dark background
- **Focus States**: Visible focus indicators on interactive elements
- **Screen Reader Support**: Descriptive text for countdown timer
- **Keyboard Navigation**: All interactive elements are keyboard accessible

## Performance Considerations

- **Timer Cleanup**: Proper cleanup of setInterval in useEffect
- **Optimized Animations**: CSS animations instead of JavaScript
- **Backdrop Blur**: Modern CSS feature with fallbacks
- **SVG Patterns**: Scalable vector graphics for crisp display

## Browser Support

- **Modern Browsers**: Full feature support
- **Backdrop Blur**: Requires modern browser support (fallback: solid background)
- **CSS Grid**: Supported in all modern browsers
- **Animation Support**: Graceful degradation for reduced motion preferences

## Configuration Options

The component can be easily customized by modifying:

- **Target Date**: Change the `targetDate` variable
- **Event Statistics**: Update the info cards with actual numbers
- **Colors**: Modify the gradient and accent colors
- **Text Content**: Update Vietnamese text as needed
