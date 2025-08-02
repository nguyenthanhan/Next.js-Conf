# Next.js Conf 2024 - Interactive 3D Scene

[![Release and Deploy](https://github.com/nguyenthanhan/next.js-conf/workflows/Release%20and%20Deploy/badge.svg)](https://github.com/nguyenthanhan/next.js-conf/actions/workflows/release-and-deploy.yml)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-black)](https://vercel.com/heimers-projects/v0-next-js-conf-2024)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)

A modern Next.js application featuring an interactive 3D scene built with React Three Fiber, showcasing animated box letters and immersive user interactions. This project demonstrates cutting-edge web technologies for creating engaging 3D experiences in the browser.

## ✨ Features

- **Interactive 3D Scene**: Immersive 3D environment with animated box letters
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Fluid motion and physics-based interactions
- **Modern UI Components**: Comprehensive component library built with Radix UI and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Efficient rendering with React Three Fiber
- **Theme Support**: Dark/light mode with seamless transitions
- **Mobile Touch Controls**: Intuitive touch interactions for mobile devices
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.4 (React 19, TypeScript)
- **3D Graphics:** React Three Fiber, Three.js, @react-three/drei
- **Styling:** Tailwind CSS, Tailwind CSS Animate
- **UI Components:** Radix UI primitives, shadcn/ui patterns
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React, Custom SVG icons
- **Package Manager:** pnpm
- **Deployment:** Vercel with GitHub Actions
- **Theme:** next-themes for dark/light mode
- **CI/CD:** GitHub Actions with unified release and deploy workflow

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
├── scripts/              # Build and release scripts
├── styles/               # Additional global styles
├── utils/                # Utility functions
└── .github/workflows/    # GitHub Actions workflows
```

## 🎮 Interactive Features

### 3D Scene Controls

- **Orbit Controls**: Click and drag to rotate the camera around the scene
- **Auto-rotation**: Scene automatically rotates when not interacting
- **Momentum-based Animation**: Drag velocity affects auto-rotation speed
- **Mobile Optimization**: Touch-friendly controls for mobile devices
- **Smooth Transitions**: Fluid camera movements and animations

### Animated Elements

- **Box Letters**: Individual 3D letters with physics-based animations
- **Random Movement**: Letters move independently when user is not interacting
- **Color Transitions**: Smooth color changes and visual effects
- **Responsive Layout**: Adapts to different screen sizes
- **Performance Optimized**: Efficient rendering with frame rate optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS version recommended)
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next.js-conf
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

## 🚀 Deployment

### Automated Deployment

This project uses GitHub Actions for automated deployment to Vercel:

1. **Create a new version tag:**

   ```bash
   git tag v1.0.4
   git push origin v1.0.4
   ```

2. **Automatic workflow triggers:**
   - Creates GitHub release with changelog
   - Deploys to Vercel production
   - Updates GitHub deployment records

### Manual Deployment

For manual deployment to Vercel:

```bash
pnpm build
vercel --prod
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Or deploy to Vercel
vercel --prod
```

### Development Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Release management
pnpm release      # Interactive release
pnpm release:patch # Patch release
pnpm release:minor # Minor release
pnpm release:major # Major release
pnpm changelog    # Generate changelog
```

## 🎨 Customization

### Adding New 3D Components

1. Create new components in the `components/` directory
2. Import and use them in `Scene.tsx`
3. Follow the existing patterns for props and animations
4. Ensure proper TypeScript typing

### Styling

- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes
- Theme customization: Modify `components/theme-provider.tsx`
- Custom animations: Add to `tailwind.config.ts`

### UI Components

- All reusable UI components are in `components/ui/`
- Based on Radix UI primitives for accessibility
- Follow shadcn/ui patterns for consistency
- Fully typed with TypeScript

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
- `next-themes`: Theme switching

### Forms & Validation

- `react-hook-form`: Performant forms
- `@hookform/resolvers`: Form validation resolvers
- `zod`: TypeScript-first schema validation

### Development Tools

- `typescript`: Type safety
- `eslint`: Code linting
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

- Custom color palette
- Animation utilities
- Responsive breakpoints
- Dark mode support

### TypeScript Configuration

Strict TypeScript configuration with:

- Path mapping for clean imports
- Strict type checking
- Modern ES features

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

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
- `chore:` Maintenance tasks

### Development Guidelines

- Write clean, readable code
- Add TypeScript types for all components
- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- 3D graphics powered by [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the documentation
- Review the code examples

---
