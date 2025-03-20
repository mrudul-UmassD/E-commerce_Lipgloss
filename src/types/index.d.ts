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