# Lip Gloss Store - Teen Beauty E-commerce Platform

A modern, responsive e-commerce web application built with Next.js, specifically designed for selling lip gloss products to teen girls.

## Features

- 🎨 Modern and responsive design
- 🛍️ Product catalog with detailed views
- 🛒 Shopping cart functionality
- 👤 User authentication (dummy implementation)
- 💳 Payment integration (dummy implementation)
- 📱 Mobile-first approach
- 🧪 Comprehensive test coverage

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Jest & Selenium (Testing)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Chrome browser (for Selenium tests)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mrudul-UmassD/E-commerce_Lipgloss.git
cd lip-gloss-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lip-gloss-store/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── store/              # Zustand store
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── tests/                  # Test files
│   ├── unit/              # Unit tests
│   └── e2e/               # End-to-end tests
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode

## Testing

The project includes both unit tests and end-to-end tests:

- Unit tests are written using Jest and React Testing Library
- E2E tests are implemented using Selenium WebDriver

To run the tests:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 