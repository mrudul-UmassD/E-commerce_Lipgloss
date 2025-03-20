import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="container-custom py-12 border-t">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-3 text-gray-800">Stay in the Glow</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for exclusive offers, beauty tips, and new product alerts!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-grow"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-50 py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              <span className="text-primary-dark">Gloss</span> & Glam
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Your one-stop shop for trendy lip glosses and beauty products. 
              We're passionate about helping teens express themselves through beautiful, 
              high-quality beauty products.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary-dark hover:shadow-md transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary-dark hover:shadow-md transition-all"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary-dark hover:shadow-md transition-all"
                aria-label="Pinterest"
              >
                <FaPinterest className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary-dark hover:shadow-md transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-dark transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=new" className="text-gray-600 hover:text-primary-dark transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?category=bestsellers" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/products?category=sets" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary-dark transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-dark transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-primary-dark transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="container-custom py-6 text-center text-gray-500 text-sm border-t">
        <div className="mb-4 flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-primary-dark transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-primary-dark transition-colors">
            Terms of Service
          </Link>
          <span>|</span>
          <Link href="/sitemap" className="hover:text-primary-dark transition-colors">
            Sitemap
          </Link>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Gloss & Glam. All rights reserved. 
          <span className="block sm:inline sm:ml-1">Made with 💖 for beauty enthusiasts.</span>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <img src="/images/payment-visa.svg" alt="Visa" className="h-6" />
          <img src="/images/payment-mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/images/payment-paypal.svg" alt="PayPal" className="h-6" />
          <img src="/images/payment-apple.svg" alt="Apple Pay" className="h-6" />
        </div>
      </div>
    </footer>
  )
}

export default Footer 