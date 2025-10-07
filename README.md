# VPBank Technology Hackathon 2025 - Website Clone

A modern, responsive clone of the VPBank Technology Hackathon 2025 landing page built with Next.js 15, TypeScript 5, and Tailwind CSS 4.

## 🚀 Project Overview

This project is a pixel-perfect recreation of the VPBank Technology Hackathon 2025 website, featuring cutting-edge web technologies and best practices:

### ✨ Key Features

- **Latest Tech Stack**: Next.js 15.5.4 with Turbopack, TypeScript 5, Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experience
- **Component Architecture**: Modular, reusable components with comprehensive documentation
- **Performance Optimized**: Turbopack for lightning-fast builds and hot reloading
- **Interactive UI**: Responsive navigation with mobile toggle menu and smooth animations
- **Type Safety**: Full TypeScript integration with proper type definitions
- **Modern Styling**: Utility-first CSS with Tailwind CSS 4 and custom gradients

## 📁 Project Structure

```text
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

## 🛠 Technology Stack

### Core Technologies

- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[TypeScript 5](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React 19.1.0](https://react.dev/)** - UI library for building components

### Development Tools

- **[Turbopack](https://turbo.build/pack)** - Ultra-fast bundler for development
- **[ESLint 9](https://eslint.org/)** - Code linting and quality checks
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

### Key Dependencies

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "eslint": "^9"
  }
}
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **Yarn** or **npm** package manager

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd typescript-vpbank-hackathon
```

2. **Install dependencies:**

```bash
yarn install
# or
npm install
```

3. **Run the development server:**

```bash
yarn dev
# or
npm run dev
```

4. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production with Turbopack
- `yarn start` - Start production server
- `yarn lint` - Run ESLint code quality checks

## 🧩 Components

### Header Component

The header features a sophisticated responsive navigation system:

#### Desktop Navigation
- **Centered Layout**: VPBank and AWS logos on the left, navigation items centered, register button on the right
- **Gradient Background**: Teal to green gradient matching VPBank branding
- **Smooth Transitions**: Hover effects with color transitions

#### Mobile Navigation
- **Toggle Menu**: Hamburger icon that opens horizontal navigation overlay
- **Inline Close Button**: X button positioned alongside navigation items
- **Consistent Styling**: Same gradient background and hover effects
- **Perfect Alignment**: Toggle and close buttons vertically aligned with identical sizes

### Component Architecture

Each component is built as a self-contained module with comprehensive documentation:

- **[Header](./docs/components/Header.md)** - Responsive navigation with mobile toggle menu
- **[Hero](./docs/components/Hero.md)** - Main banner with countdown timer
- **[About](./docs/components/About.md)** - Event introduction and highlights
- **[Timeline](./docs/components/Timeline.md)** - Interactive event schedule
- **[Challenges](./docs/components/Challenges.md)** - Technology tracks and categories
- **[Prizes](./docs/components/Prizes.md)** - Awards and recognition details
- **[Registration](./docs/components/Registration.md)** - Multi-step registration form
- **[FAQ](./docs/components/FAQ.md)** - Expandable questions and answers
- **[Footer](./docs/components/Footer.md)** - Contact info and links

## 🎨 Design System

The project follows VPBank's design language with modern web standards:

### Color Palette

- **Primary Gradient**: Teal-700 to Green-700 (`from-teal-700 to-green-700`)
- **Text Colors**: White primary, Gray-300 for hover states
- **Background**: Semi-transparent overlays (`bg-white/10`)

### Typography

- **Font Family**: Montserrat (via custom CSS classes)
- **Font Weights**: Medium (500) for navigation, various weights for content
- **Responsive Sizing**: `text-lg` for mobile, scalable for larger screens

### Spacing & Layout

- **Container**: Responsive max-width with auto margins
- **Padding**: `px-4 lg:px-8` for responsive horizontal spacing
- **Margins**: Consistent spacing scale (`mr-4`, `space-x-8`, etc.)

## 📱 Responsive Design

### Breakpoint Strategy

- **Mobile First**: Base styles for mobile (< 768px)
- **Tablet**: `md:` prefix for medium screens (≥ 768px)
- **Desktop**: `lg:` and `xl:` for large screens (≥ 1024px, ≥ 1280px)

### Navigation Behavior

- **Mobile/Tablet**: Hamburger menu with horizontal overlay
- **Desktop**: Full navigation bar with centered items
- **Consistent**: Same hover effects and styling across all breakpoints

## ✨ Features

### Navigation System

- ✅ **Responsive Header**: Desktop centered layout, mobile toggle menu
- ✅ **Mobile Navigation**: Horizontal overlay with inline close button
- ✅ **Perfect Alignment**: Toggle and close buttons on same vertical line
- ✅ **Consistent Sizing**: Identical button sizes and hover areas
- ✅ **Smooth Transitions**: 200ms color transitions for all interactive elements

### Technical Features

- ✅ **Next.js 15 with Turbopack**: Lightning-fast development and builds
- ✅ **TypeScript Integration**: Full type safety with proper definitions
- ✅ **Tailwind CSS 4**: Modern utility-first styling
- ✅ **Component Architecture**: Modular, reusable components
- ✅ **Performance Optimized**: Image optimization and code splitting

## 📋 Configuration

### Package.json Structure

The project uses a carefully configured `package.json` with:

- **Private Package**: Marked as private to prevent accidental publishing
- **Exact Versions**: React and Next.js use exact versions for stability
- **Caret Ranges**: Development dependencies use caret ranges for flexibility
- **Turbopack Integration**: Both dev and build scripts use `--turbopack` flag

For detailed configuration explanation, see [Package.json Documentation](./docs/config/package.json.md).

## 🧪 Testing & Development

### Development Workflow

1. **Start Development Server:**

```bash
yarn dev
# Starts Next.js with Turbopack on http://localhost:3000
```

2. **Test Responsive Design:**
   - Use browser developer tools
   - Test on actual mobile/tablet devices
   - Verify navigation behavior across breakpoints

3. **Code Quality:**

```bash
yarn lint
# Runs ESLint for code quality checks
```

### Browser Testing

- **Chrome/Safari**: Primary testing browsers
- **Mobile Safari**: iOS device testing
- **Chrome Mobile**: Android device testing
- **Responsive Design**: All major breakpoints

## 📚 Documentation

### Available Documentation

- **[Package.json Guide](./docs/config/package.json.md)** - Complete package configuration explanation
- **[Component Documentation](./docs/components/)** - Individual component guides
- **[README Files](./docs/)** - Comprehensive project documentation

### Component Documentation Structure

Each component includes:

- **Implementation Details**: Code structure and logic
- **Props Interface**: TypeScript interfaces and types
- **Usage Examples**: How to use and customize
- **Styling Approach**: Tailwind classes and responsive design
- **Responsive Behavior**: Breakpoint-specific functionality

## 🚀 Deployment

### Build for Production

```bash
yarn build
# Creates optimized production build with Turbopack
```

### Start Production Server

```bash
yarn start
# Starts production server (requires build first)
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes with proper TypeScript types
4. **Test** thoroughly across all breakpoints
5. **Lint** your code (`yarn lint`)
6. **Commit** your changes (`git commit -m 'Add amazing feature'`)
7. **Push** to the branch (`git push origin feature/amazing-feature`)
8. **Submit** a pull request

## 📄 License

This project is for **educational purposes only**. All VPBank branding and design elements remain property of VPBank.
