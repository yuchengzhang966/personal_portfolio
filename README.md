# Personal Portfolio Website - Next.js

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This design features a clean aesthetic with smooth animations and interactive elements.

## 🚀 Features

- **Next.js 14**: Latest App Router with server-side rendering and optimization
- **TypeScript**: Type-safe development with enhanced IDE support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Responsive Design**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: Smooth scrolling navigation and dynamic effects
- **Optimized Images**: Next.js Image optimization for your personal photo
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 📁 Project Structure

```
personal_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main page component
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx        # Navigation header
│       ├── Hero.tsx          # Hero section with your photo
│       ├── Projects.tsx      # Projects showcase
│       ├── About.tsx         # About section
│       └── Contact.tsx       # Contact section
├── public/
│   └── images/
│       └── pic_headshot.png  # Your personal photo
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization Guide

### 1. Personal Information

**Update your name/brand:**
- `src/components/Header.tsx` line 33: Change "pearl" to your name
- `src/app/layout.tsx` line 11: Update the title and author

**Hero Section:**
- `src/components/Hero.tsx` lines 12-16: Customize your main headline
- Your photo is already configured at `/public/images/pic_headshot.png`

**About Section:**
- `src/components/About.tsx` lines 8-12: Update with your personal description

### 2. Contact Information

**Update contact links:**
- `src/components/Contact.tsx` lines 13-29: Replace with your actual email and social media links

### 3. Projects Section

**Customize your projects:**
- `src/components/Projects.tsx`: Replace the example projects with your actual work
- Add project descriptions, links, and screenshots
- You can add more project cards by duplicating the existing structure

### 4. Styling and Colors

**Main colors (can be customized in Tailwind classes):**
- **Primary Dark**: `gray-900` (header, buttons)
- **Light Background**: `gray-50` (sections)
- **Accent Blue**: `blue-500/600` (project elements)
- **Text Colors**: `gray-900` (headings), `gray-600` (body text)

**To add custom colors:**
1. Update `tailwind.config.ts`
2. Add your custom color palette
3. Use throughout your components

### 5. Adding New Sections

To add new sections:
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure for single-page application

### Other Platforms
- **GitHub Pages**: Use `next export` for static export
- **AWS S3**: Deploy the built static files
- **Docker**: Use the included Dockerfile for containerization

## 🔧 Technical Details

### Performance Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Static generation for better SEO
- Tailwind CSS purging for smaller bundle size

### SEO Features
- Meta tags configuration
- Structured data markup
- Optimized images with alt text
- Semantic HTML structure

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Next Steps

1. **Content**: Update all placeholder content with your actual information
2. **Projects**: Add your real projects with descriptions and links
3. **Styling**: Customize colors and spacing to match your brand
4. **Analytics**: Add Google Analytics or similar tracking
5. **Contact Form**: Consider adding a contact form with form handling
6. **Blog**: Add a blog section using MDX if desired

## 🤝 Contributing

Feel free to customize this template for your needs. If you create improvements that could benefit others, consider sharing them!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
 