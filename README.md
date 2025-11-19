# Anna David English Teacher Website

Professional bilingual website for Anna David - CELTA-certified English teacher offering personalized 1-on-1 virtual lessons.

## 🌐 Live Website

**Repository:** https://github.com/nioasoft/annadavid-english-teacher

**Deploy to Vercel:** Click the button below to deploy instantly

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nioasoft/annadavid-english-teacher)

## ✨ Features

- **🌍 Bilingual** - Full English/Hebrew support with RTL (Right-to-Left) for Hebrew
- **📱 Responsive** - Mobile-first design, works perfectly on all devices
- **♿ Accessible** - WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **⚡ Fast** - Optimized with Next.js 14 and Tailwind CSS
- **📧 Working Contact Form** - With validation and email integration ready
- **🔍 SEO Ready** - Optimized meta tags and structured content

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nioasoft/annadavid-english-teacher.git
   cd annadavid-english-teacher
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

   Add the following variables:
   ```env
   # Resend API Key (for sending emails)
   # Get yours at: https://resend.com/api-keys
   RESEND_API_KEY=re_YourResendApiKeyHere

   # From email (must be verified in Resend)
   FROM_EMAIL=onboarding@resend.dev

   # Your email (where contacts will be sent)
   TO_EMAIL=miss.anna.davidi@gmail.com
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📂 Project Structure

```
├── app/                           # Next.js App Router
│   ├── [locale]/                  # Locale-specific pages (en/he)
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── process/page.tsx
│   │   ├── services/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx              # Home page
│   ├── api/contact/route.ts      # Contact form API
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/                 # Page sections
│   │   └── ContactForm.tsx
│   └── ui/                       # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Hero.tsx
│       ├── IconCard.tsx
│       ├── Section.tsx
│       └── Timeline.tsx
├── content/                      # Translations
│   ├── en.json                   # English translations
│   └── he.json                   # Hebrew translations
├── lib/
│   └── i18n.ts                   # Internationalization config
├── public/                       # Static assets
└── middleware.ts                 # Next.js middleware
```

## 🎨 Design System

### Colors
- **Background:** `#FAFAF9` (warm off-white)
- **Surface:** `#FFFFFF`
- **Text Primary:** `#1F2937`
- **Text Secondary:** `#6B7280`
- **Accent (Blue):** `#60A5FA`
- **Accent (Green):** `#34D399`

### Typography
- **English:** Inter (Google Fonts)
- **Hebrew:** Heebo (Google Fonts)

## 🌐 Languages & URLs

- **English:** `/en` or `/en/[page]`
- **Hebrew:** `/he` or `/he/[page]`

Examples:
- Home: `/en` or `/he`
- About: `/en/about` or `/he/about`
- Services: `/en/services` or `/he/services`
- Process: `/en/process` or `/he/process`
- Contact: `/en/contact` or `/he/contact`

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com/) to send emails. To enable it:

1. Sign up at [Resend.com](https://resend.com/)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file:
   ```env
   RESEND_API_KEY=re_YourActualApiKeyHere
   FROM_EMAIL=your@verified-domain.com
   TO_EMAIL=miss.anna.davidi@gmail.com
   ```

4. If you don't set up Resend, the form will still work but emails won't be sent (you'll see an error in the console)

## 🚀 Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Set environment variables when prompted:**
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`

### Method 2: Using Vercel Dashboard

1. Go to [Vercel.com](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import from GitHub: `nioasoft/annadavid-english-teacher`
4. Add Environment Variables:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
5. Click "Deploy"

### Method 3: One-Click Deploy

Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nioasoft/annadavid-english-teacher)

## 🔧 Customization

### Update Content

All content is in `/content/en.json` and `/content/he.json`. Edit these files to update text.

### Update Contact Information

In `/content/en.json` and `/content/he.json`, update:
- `Contact.alternative.email`
- `Contact.alternative.whatsapp`

### Update Colors

Edit `/app/globals.css` to customize the color scheme.

### Add/Update Services

Edit the services section in `/app/[locale]/services/page.tsx` and update the content in `/content/*.json` files.

## 📄 Pages Overview

### Home (`/`)
- Hero section with CTA buttons
- 3 value proposition cards
- 4 target audience segments
- CTA section

### About (`/about`)
- Personal story
- Qualifications
- Teaching philosophy

### Services (`/services`)
- Business English
- Travel English
- Test Preparation (Psychometric)
- General English Improvement
- What makes the approach different

### Process (`/process`)
- 5-step timeline
- Expectations from students
- CTA to contact

### Contact (`/contact`)
- Contact form with validation
- Alternative contact methods (email, WhatsApp)

## 🛠️ Built With

- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Validation
- [Lucide React](https://lucide.dev/) - Icons
- [Resend](https://resend.com/) - Email service

## 📄 License

MIT License - feel free to use and modify!

## 🤝 Support

If you need help with customization or deployment, please open an issue on GitHub.

## 🎉 What's Next?

After deploying:

1. **Test the contact form** - Submit a test message
2. **Check your email** - Verify you receive the message
3. **Update your domain** - Add a custom domain in Vercel settings
4. **Share your website!** - Start sending it to potential students

---

**Built with ❤️ for Anna David**
