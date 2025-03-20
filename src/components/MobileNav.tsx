'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  UserIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { CartState, CartItem } from '@/types/cart'

const MobileNav = () => {
  const pathname = usePathname()
  const cartItems = useCartStore((state: CartState) => state.items)
  const itemCount = cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0)

  const navItems = [
    { 
      href: '/', 
      label: 'Home', 
      icon: HomeIcon 
    },
    { 
      href: '/products', 
      label: 'Shop', 
      icon: MagnifyingGlassIcon 
    },
    { 
      href: '/wishlist', 
      label: 'Wishlist', 
      icon: HeartIcon 
    },
    { 
      href: '/cart', 
      label: 'Cart', 
      icon: ShoppingBagIcon,
      badge: itemCount > 0 ? itemCount : null
    },
    { 
      href: '/login', 
      label: 'Account', 
      icon: UserIcon 
    }
  ]

  return (
    <div id="mobile-navigation" className="mobile-nav-container fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
      <style jsx global>{`
        /* Hide any other navigation elements */
        .floating-icons, 
        .side-icons, 
        .blue-icons, 
        .floating-nav,
        svg[fill="blue"],
        svg[stroke="blue"],
        svg[color="blue"],
        svg[width="384"][height="512"],
        svg[height="512"][width="384"],
        svg[width="448"][height="512"],
        svg[height="512"][width="448"],
        svg[width="576"][height="512"],
        svg[height="512"][width="576"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        
        /* Ensure our mobile nav is on top */
        #mobile-navigation {
          z-index: 9999 !important;
          display: flex !important;
        }
        
        @media (min-width: 768px) {
          #mobile-navigation {
            display: none !important;
          }
        }
      `}</style>
      <div className="flex justify-around items-center h-16 w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`mobile-nav-item flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? 'mobile-nav-item-active' : ''}`}
            >
              <div className="relative">
                <Icon 
                  className={`h-6 w-6 ${isActive 
                    ? 'text-pink-600' 
                    : 'text-gray-600'
                  }`} 
                />
                
                {item.badge && (
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center"
                  >
                    {item.badge}
                  </motion.span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive 
                ? 'text-pink-600 font-medium' 
                : 'text-gray-600'
              }`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNav 