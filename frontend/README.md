# DoulaDoo - Mom & Baby Care Agency

Professional doula services website with AI assistant for birth, postpartum, and beyond support.

## Features

- 🏠 **Professional Doula Services** - Birth support, postpartum care, and beyond
- 🤖 **AI Assistant** - 24/7 doula expertise and guidance
- 🎨 **Theme Switching** - Original and DoulaDoo themes
- 📱 **Responsive Design** - Mobile-first approach
- 📅 **Booking Integration** - Calendly widget for consultations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-3.5-turbo
- **Booking**: Calendly integration
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/doula-website.git
cd doula-website
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.local.example .env.local
```

4. Add your OpenAI API key to `.env.local`
```
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── api/chat/          # AI chat API endpoint
│   ├── globals.css        # Global styles and themes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── AIAssistant.tsx    # AI chat component
│   ├── Navigation.tsx     # Navigation bar
│   ├── ServiceCard.tsx    # Service card component
│   └── ThemeToggle.tsx    # Theme switcher
```

## Themes

The website supports two themes:

- **Original**: Blue and orange color scheme
- **DoulaDoo**: Terracotta and pastel color scheme

Themes are saved in localStorage and persist across page reloads.

## Deployment

This project can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

For static hosting (GitHub Pages), additional configuration is required.

## License

© 2024 DoulaDoo. All rights reserved.
