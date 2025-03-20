// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

import '@testing-library/jest-dom'

// Mock next/image to avoid issues with jest
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />
  },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => '/',
}))

// Mock window.fetch
global.fetch = jest.fn();

// Mock chrome driver for E2E tests
jest.mock('selenium-webdriver/chrome', () => ({
  ServiceBuilder: jest.fn().mockImplementation(() => ({
    build: jest.fn(),
  })),
  setDefaultService: jest.fn(),
}))

jest.mock('chromedriver', () => ({
  path: '/path/to/chromedriver',
}))

// Create Element.animate mock
if (typeof window !== 'undefined') {
  Element.prototype.animate = jest.fn()
  Element.prototype.getAnimations = jest.fn(() => [])
}

// Set up framer-motion mock
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  }
})) 