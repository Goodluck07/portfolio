# Goodluck Badewole - Portfolio

A modern, professional portfolio website showcasing my work experience, projects, and skills.

## Features

- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS v4
- **Dark Mode**: Fully functional dark/light theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Professional animations using Framer Motion
- **Interactive Sections**:
  - Hero with social links
  - About section with affiliations
  - Education with honors and awards
  - Work experience timeline
  - Featured projects with tech stacks
  - Technical skills categorized by type
  - Leadership and activities
  - Contact form
  - Footer with quick links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository (or it's already set up locally)
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Contact Form Setup

The contact form in `components/Contact.tsx` is ready to use with Formspree:

1. Go to [https://formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy your form endpoint
4. Replace `YOUR_FORM_ID` in `components/Contact.tsx`:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### Updating Content

All portfolio content is centralized in `lib/data.ts`. Update this file to modify:

- Personal information
- Education details
- Work experience
- Projects
- Skills
- Leadership activities
- Professional affiliations

### Styling

- Colors and theme variables are in `app/globals.css`
- Modify the CSS variables to change the color scheme
- Dark mode colors are defined in the `.dark` class

## Deployment to Vercel

1. Push your code to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

2. Go to [https://vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js and configure settings
7. Click "Deploy"

Your portfolio will be live at `https://your-project-name.vercel.app`

### Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update DNS records

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and theme
├── components/
│   ├── Navigation.tsx  # Navbar with smooth scroll
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education details
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Featured projects
│   ├── Skills.tsx      # Technical skills
│   ├── Leadership.tsx  # Leadership activities
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── ThemeToggle.tsx # Dark mode toggle
├── lib/
│   └── data.ts         # Portfolio content
└── public/             # Static assets
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Dark Mode**: next-themes
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## License

This project is open source and available for personal use.

## Contact

- **Email**: badewolegoodluck55@gmail.com
- **LinkedIn**: [linkedin.com/in/goodluck-badewole](https://linkedin.com/in/goodluck-badewole)
- **GitHub**: [github.com/Goodluck07](https://github.com/Goodluck07)
