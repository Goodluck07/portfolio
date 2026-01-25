# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my experience, and skills in software development and AI/ML engineering.

## 🚀 Live Demo

Visit the live site: [Goodluck Badewole Portfolio](https://goodluck-badewole-portfolio.vercel.app/)

## ⚡ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (Dark/Light mode)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Form:** Formspree
- **Deployment:** Vercel

## ✨ Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design (mobile-first approach)
- ⚡ Smooth scroll animations and transitions
- 📊 Vercel Analytics integration for visitor tracking
- 📄 Resume download/view functionality
- 📧 Working contact form with Formspree
- 🎨 Modern UI with glassmorphism effects
- ♿ Accessible and SEO-optimized

## 🏗️ Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and theme variables
├── components/
│   ├── Navigation.tsx  # Sticky navbar with smooth scroll
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education timeline
│   ├── Experience.tsx  # Work experience with company logos
│   ├── Projects.tsx    # Featured projects grid
│   ├── Skills.tsx      # Technical skills
│   ├── Leadership.tsx  # Leadership activities
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer with quick links
│   └── ThemeToggle.tsx # Dark mode toggle
├── lib/
│   └── data.ts         # Centralized portfolio content
└── public/
    ├── images/         # Profile picture and company logos
    └── resume/         # Resume PDF
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Goodluck07/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Content

All portfolio content is centralized in `lib/data.ts`. Modify this file to update:
- Personal information
- Education details
- Work experience
- Projects
- Skills
- Leadership activities

### Customize Theme

Colors and theme variables are in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #3b82f6;
  /* ... */
}

.dark {
  --background: #0f172a;
  --foreground: #f1f5f9;
  --primary: #60a5fa;
  /* ... */
}
```

## 📬 Contact

- **Email:** badewolegoodluck55@gmail.com
- **LinkedIn:** [linkedin.com/in/goodluck-badewole](https://linkedin.com/in/goodluck-badewole)
- **GitHub:** [github.com/Goodluck07](https://github.com/Goodluck07)
- **Portfolio:** [goodluck-badewole-portfolio.vercel.app](https://goodluck-badewole-portfolio.vercel.app/)

---

Built with ❤️ by Goodluck Badewole
