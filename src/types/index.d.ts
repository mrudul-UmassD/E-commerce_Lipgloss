// Module declarations for external libraries
declare module 'react' {
  export const useState: any;
  export const useEffect: any;
  export default any;
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/navigation' {
  export const usePathname: any;
  export const useRouter: any;
}

declare module 'framer-motion' {
  export const motion: any;
}

declare module '@heroicons/react/24/outline' {
  export const FunnelIcon: any;
  export const XMarkIcon: any;
  export const MagnifyingGlassIcon: any;
  export const HomeIcon: any;
  export const ShoppingBagIcon: any;
  export const HeartIcon: any;
  export const UserIcon: any;
  export const Bars3Icon: any;
}

declare module '@heroicons/react/24/solid' {
  export const HeartIcon: any;
}

// Define JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Type definitions for the project

// React
declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add any custom attributes that aren't in React's types
    dangerouslySetInnerHTML?: {
      __html: string;
    };
  }
}

// Next.js modules
declare module 'next' {
  export type Metadata = {
    title?: string;
    description?: string;
    keywords?: string | string[];
    [key: string]: any;
  };
}

declare module 'next/font/google' {
  type FontOptions = {
    subsets?: string[];
    weight?: string[];
    variable?: string;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  };
  
  export function Inter(options: FontOptions): {
    className: string;
    variable?: string;
    style: { fontFamily: string };
  };
  
  export function Playfair_Display(options: FontOptions): {
    className: string;
    variable?: string;
    style: { fontFamily: string };
  };
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
  };
}

// Heroicons
declare module '@heroicons/react/24/outline' {
  export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MagnifyingGlassIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '@heroicons/react/24/solid' {
  export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

// Framer Motion
declare module 'framer-motion' {
  export const motion: {
    [key: string]: any;
  };
}

// Image types for handling errors and placeholders
declare module 'next/image' {
  export default function Image(props: ImageProps): JSX.Element;
  
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    priority?: boolean;
    onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
    [key: string]: any;
  }
}

// Testing libraries
declare module '@testing-library/react';
declare module '@testing-library/jest-dom';
declare module 'jest';

// E2E testing
declare module 'selenium-webdriver';
declare module 'selenium-webdriver/chrome';
declare module 'chromedriver'; 