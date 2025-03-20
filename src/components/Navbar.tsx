'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const pathname = usePathname()
  const cartItems = useCartStore((state) => state.items)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">
              <span className="text-primary-dark">Gloss</span> & Glam
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions (Cart, Account) */}
          <div className="flex items-center space-x-6">
            <Link href="/wishlist" className="hidden sm:flex relative hover:text-primary-dark">
              <HeartIcon className="h-6 w-6 transition-colors" />
            </Link>
            
            <Link href="/cart" className="relative group">
              <ShoppingBagIcon className="h-6 w-6 text-gray-700 transition-colors group-hover:text-primary-dark" />
              {itemCount > 0 && (
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-2 -right-2 bg-primary-dark text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>
            
            <Link href="/login">
              <UserIcon className="h-6 w-6 text-gray-700 transition-colors hover:text-primary-dark" />
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded-lg ${pathname === link.href ? 'bg-primary/10 text-primary-dark font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/wishlist"
                className="py-2 px-4 rounded-lg text-gray-700 flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HeartIcon className="h-5 w-5" />
                <span>Wishlist</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 