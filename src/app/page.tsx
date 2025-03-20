'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const featuredProducts = [
  {
    id: '1',
    name: 'Strawberry Dreams Lip Gloss',
    price: 12.99,
    image: '/images/product1.jpg',
    description: 'Sweet strawberry flavor with a subtle shimmer',
  },
  {
    id: '2',
    name: 'Bubblegum Pop Lip Gloss',
    price: 12.99,
    image: '/images/product2.jpg',
    description: 'Bubblegum scent with holographic glitter',
  },
  {
    id: '3',
    name: 'Cotton Candy Kiss Lip Gloss',
    price: 12.99,
    image: '/images/product3.jpg',
    description: 'Cotton candy flavor with rainbow sparkles',
  },
]

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Beauty background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Gloss & Glam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Your lips deserve the best
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/products" className="btn-primary">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  ${product.price}
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="btn-secondary"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary bg-opacity-10 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Beauty Club</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers and beauty tips!
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-grow"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 