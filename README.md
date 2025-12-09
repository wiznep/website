# NexaTech - IT Agency Website

A modern, professional website for an IT agency specializing in digital marketing and software development. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Bold Hero Section** - Eye-catching hero with animated gradients and CTAs
- **About Us** - Company overview with stats and key differentiators
- **Services** - Digital Marketing (SEO, Social Media, PPC, Content) & Software Development (Web, Mobile, Custom, Cloud)
- **Portfolio** - Showcase of case studies and completed projects
- **Testimonials** - Client testimonials with carousel navigation
- **Blog** - Latest insights and articles section
- **Contact** - Contact form with company information

## Design Highlights

- Clean, tech-inspired layout
- Modern fonts (Geist Sans & Mono)
- Subtle gradients and hover animations
- Smooth scrolling navigation
- Color palette: Blues (#0066FF, #003366), Blacks (#0A0A0A, #1A1A1A), Whites, Accent (#00D4FF)
- Fully responsive design

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and animations
│   ├── layout.tsx     # Root layout with Navbar and Footer
│   └── page.tsx       # Homepage with all sections
├── components/
│   ├── Navbar.tsx     # Responsive navigation
│   ├── Hero.tsx       # Hero section with CTAs
│   ├── About.tsx      # About section
│   ├── Services.tsx   # Services grid
│   ├── Portfolio.tsx  # Portfolio/case studies
│   ├── Testimonials.tsx # Testimonial carousel
│   ├── Blog.tsx       # Blog section
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer with links
```

## Deploy on Vercel

Deploy easily with [Vercel](https://vercel.com/new):

```bash
npm run build
```

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
