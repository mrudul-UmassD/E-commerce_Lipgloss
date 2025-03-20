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

declare module 'framer-motion' {
  export const motion: any;
}

declare module '@heroicons/react/24/outline' {
  export const FunnelIcon: any;
  export const XMarkIcon: any;
  export const MagnifyingGlassIcon: any;
}

// Define JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 