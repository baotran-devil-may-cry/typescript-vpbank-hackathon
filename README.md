# VPBank Technology Hackathon 2025 - Website Clone

A modern, responsive clone of the VPBank Technology Hackathon 2025 landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

This project is a pixel-perfect recreation of the VPBank Technology Hackathon 2025 website, featuring:

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Component Architecture**: Modular, reusable components with individual documentation
- **Smooth Animations**: CSS transitions and scroll-based animations
- **Interactive Elements**: Countdown timer, form validation, and dynamic content

## 📁 Project Structure

```
vpbank-hackathon/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components
│   │   ├── Header/             # Navigation header
│   │   ├── Hero/               # Hero section with countdown
│   │   ├── About/              # About/Introduction section
│   │   ├── Timeline/           # Event timeline
│   │   ├── Challenges/         # Challenge tracks
│   │   ├── Prizes/             # Prizes and awards
│   │   ├── Registration/       # Registration form
│   │   ├── FAQ/                # FAQ section
│   │   └── Footer/             # Footer component
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
└── docs/                       # Component documentation
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vpbank-hackathon
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🧩 Components

Each component is built as a self-contained module with its own README documentation:

- **[Header](./docs/components/Header.md)** - Navigation with responsive menu
- **[Hero](./docs/components/Hero.md)** - Main banner with countdown timer
- **[About](./docs/components/About.md)** - Event introduction and highlights
- **[Timeline](./docs/components/Timeline.md)** - Interactive event schedule
- **[Challenges](./docs/components/Challenges.md)** - Technology tracks and categories
- **[Prizes](./docs/components/Prizes.md)** - Awards and recognition details
- **[Registration](./docs/components/Registration.md)** - Multi-step registration form
- **[FAQ](./docs/components/FAQ.md)** - Expandable questions and answers
- **[Footer](./docs/components/Footer.md)** - Contact info and links

## 🎨 Design System

The project follows VPBank's design language with:

- **Colors**: VPBank brand colors (green, blue, white)
- **Typography**: Modern, readable font hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI elements
- **Animations**: Subtle, professional transitions

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Features

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Interactive countdown timer
- ✅ Smooth scroll animations
- ✅ Form validation and submission
- ✅ FAQ accordion functionality
- ✅ Modern CSS Grid and Flexbox layouts
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 🧪 Testing

Run the development server and test the website:

```bash
yarn dev
```

Test responsive design using browser developer tools or visit on different devices.

## 📚 Documentation

Detailed component documentation is available in the `/docs` folder. Each component includes:

- Implementation details
- Props interface
- Usage examples
- Styling approach
- Responsive behavior

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes only.
