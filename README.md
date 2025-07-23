# Next.js Conf 2024 - Interactive 3D Scene

A modern Next.js application featuring an interactive 3D scene built with React Three Fiber, showcasing animated box letters and immersive user interactions.

## 🚀 Live Demo

**[https://vercel.com/heimers-projects/v0-next-js-conf-2024](https://vercel.com/heimers-projects/v0-next-js-conf-2024)**

## ✨ Features

- **Interactive 3D Scene**: Immersive 3D environment with animated box letters
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Fluid motion and physics-based interactions
- **Modern UI Components**: Comprehensive component library built with Radix UI and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Efficient rendering with React Three Fiber

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.4 (React 19, TypeScript)
- **3D Graphics:** React Three Fiber, Three.js, @react-three/drei
- **Styling:** Tailwind CSS, Tailwind CSS Animate
- **UI Components:** Radix UI primitives, shadcn/ui patterns
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Package Manager:** pnpm
- **Deployment:** Vercel

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── BoxLetter.tsx     # 3D animated letter component
│   ├── BoxWithEdges.tsx  # 3D box with edge highlighting
│   ├── DanglingText.tsx  # Animated text component
│   ├── Scene.tsx         # Main 3D scene component
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional global styles
└── utils/                # Utility functions
```

## 🎮 Interactive Features

### 3D Scene Controls

- **Orbit Controls**: Click and drag to rotate the camera around the scene
- **Auto-rotation**: Scene automatically rotates when not interacting
- **Momentum-based Animation**: Drag velocity affects auto-rotation speed
- **Mobile Optimization**: Touch-friendly controls for mobile devices

### Animated Elements

- **Box Letters**: Individual 3D letters with physics-based animations
- **Random Movement**: Letters move independently when user is not interacting
- **Color Transitions**: Smooth color changes and visual effects
- **Responsive Layout**: Adapts to different screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Next.js-Conf
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Adding New 3D Components

1. Create new components in the `components/` directory
2. Import and use them in `Scene.tsx`
3. Follow the existing patterns for props and animations

### Styling

- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes
- Theme customization: Modify `components/theme-provider.tsx`

### UI Components

- All reusable UI components are in `components/ui/`
- Based on Radix UI primitives for accessibility
- Follow shadcn/ui patterns for consistency

## 📦 Key Dependencies

### 3D Graphics

- `@react-three/fiber`: React renderer for Three.js
- `@react-three/drei`: Useful helpers for React Three Fiber
- `three`: 3D graphics library

### UI & Styling

- `@radix-ui/*`: Accessible UI primitives
- `tailwindcss`: Utility-first CSS framework
- `lucide-react`: Beautiful icons
- `class-variance-authority`: Component variant management

### Forms & Validation

- `react-hook-form`: Performant forms
- `@hookform/resolvers`: Form validation resolvers
- `zod`: TypeScript-first schema validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- 3D graphics powered by [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com/)
