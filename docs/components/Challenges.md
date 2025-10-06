# Challenges Component

## Overview
The Challenges component showcases the different hackathon tracks and challenges available for participants. Each challenge has specific requirements, technologies, and prize amounts.

## Features

### Challenge Categories
The component displays 6 main challenges:

1. **FinTech Innovation Challenge** (Advanced)
   - Prize: 500,000,000 VNĐ
   - Focus: Financial technology solutions
   - Technologies: React, Node.js, AI/ML, Blockchain

2. **AI-Powered Banking** (Intermediate)
   - Prize: 300,000,000 VNĐ
   - Focus: AI chatbots and intelligent banking systems
   - Technologies: Python, TensorFlow, NLP, API Integration

3. **Blockchain Security** (Advanced)
   - Prize: 400,000,000 VNĐ
   - Focus: Blockchain-based security solutions
   - Technologies: Solidity, Web3, Smart Contracts, Ethereum

4. **Mobile Banking UX** (Intermediate)
   - Prize: 250,000,000 VNĐ
   - Focus: Mobile app user experience
   - Technologies: React Native, Flutter, UI/UX Design, Mobile Security

5. **Financial Data Analytics** (Beginner)
   - Prize: 200,000,000 VNĐ
   - Focus: Data analysis and market prediction
   - Technologies: Python, Pandas, Machine Learning, Data Visualization

6. **Open Innovation Track** (Beginner)
   - Prize: 150,000,000 VNĐ
   - Focus: Creative and unrestricted solutions
   - Technologies: Any Technology, Creative Solutions, Innovation

### Difficulty Levels
- **Beginner** (Green): Entry-level challenges
- **Intermediate** (Yellow): Moderate complexity
- **Advanced** (Red): High complexity requiring expert skills

## Technical Implementation

### Component Structure
```typescript
interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  technologies: string[];
  prize: string;
  icon: React.ReactNode;
}
```

### Key Functions
- `getDifficultyColor()`: Returns CSS classes for difficulty level styling
- Challenge cards with hover effects and interactive elements

### Visual Design
- **Grid Layout**: 2-column grid on large screens, single column on mobile
- **Challenge Cards**: Clean white cards with borders and hover effects
- **Icon System**: Custom SVG icons for each challenge category
- **Technology Tags**: Pill-shaped tags showing suggested technologies
- **Prize Display**: Prominent prize amount in green color

### Interactive Elements
- **Hover Effects**: Cards lift and change border color on hover
- **Challenge Selection**: "Chọn thử thách" buttons for each challenge
- **Call-to-Action**: Registration button in the rules section

## Rules and Guidelines Section
The component includes a dedicated section explaining:
- Teams can choose up to 2 challenges
- 48-hour development timeframe
- Open source requirement (GitHub)
- 5-minute demo presentation requirement

## Prize Information
- **Total Prize Pool**: 1+ billion VNĐ
- **Individual Prizes**: Range from 150M to 500M VNĐ
- **Clear Prize Display**: Each challenge shows its specific prize amount

## Usage
The Challenges component helps participants understand available tracks, choose appropriate challenges based on their skills, and provides clear information about requirements and rewards.

## Accessibility
- Semantic HTML with proper heading structure
- Color-coded difficulty levels with text labels
- Clear visual hierarchy and readable typography
- Responsive design for all screen sizes
- Interactive elements with proper hover states
