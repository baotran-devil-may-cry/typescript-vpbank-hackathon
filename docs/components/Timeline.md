# Timeline Component

## Overview
The Timeline component displays the chronological schedule of events for the VPBank Technology Hackathon 2025. It provides a visual timeline with important dates, times, and event descriptions.

## Features

### Visual Timeline
- **Vertical Timeline Layout**: Clean vertical timeline with connecting lines
- **Event Categorization**: Different types of events (registration, event, deadline, announcement)
- **Color-coded Icons**: Each event type has distinct colors and icons
- **Responsive Design**: Adapts to different screen sizes

### Event Types
1. **Registration** (Green): Registration-related events
2. **Event** (Blue): Main hackathon events
3. **Deadline** (Red): Important deadlines
4. **Announcement** (Yellow): Announcements and results

### Timeline Events
The component includes 8 key events:
1. **Registration Opens** (15/01/2025)
2. **Registration Deadline** (28/02/2025)
3. **Team Announcement** (05/03/2025)
4. **Hackathon Opening** (15/03/2025)
5. **Coding Begins** (15/03/2025)
6. **Submission Deadline** (17/03/2025)
7. **Presentations** (17/03/2025)
8. **Awards Ceremony** (17/03/2025)

## Technical Implementation

### Component Structure
```typescript
interface TimelineEvent {
  date: string;
  time: string;
  title: string;
  description: string;
  type: 'registration' | 'event' | 'deadline' | 'announcement';
}
```

### Key Functions
- `getTypeColor()`: Returns appropriate CSS classes for event type styling
- `getTypeIcon()`: Returns SVG icons for different event types

### Styling Features
- **Timeline Line**: Vertical line connecting all events
- **Event Dots**: Circular indicators with type-specific icons
- **Event Cards**: White cards with shadow effects and hover animations
- **Responsive Layout**: Stacked layout on mobile, side-by-side on desktop

### Interactive Elements
- **Hover Effects**: Cards lift with shadow on hover
- **Call-to-Action**: Registration button at the bottom
- **Visual Hierarchy**: Clear date/time display with event details

## Usage
The Timeline component is automatically included in the main page layout and provides users with a clear understanding of the hackathon schedule and important deadlines.

## Accessibility
- Semantic HTML structure with proper headings
- Color-coded events with icons for better visual distinction
- Clear typography hierarchy for easy reading
- Responsive design for all device types
