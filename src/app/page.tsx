'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Strawberry Dreams',
    price: 12.99,
    image: '/images/product1.jpg',
    description: 'Sweet strawberry flavor with a subtle shimmer',
    category: 'Fruity',
    tags: ['bestseller', 'shimmer'],
  },
  {
    id: '2',
    name: 'Bubblegum Pop',
    price: 12.99,
    image: '/images/product2.jpg',
    description: 'Bubblegum scent with holographic glitter',
    category: 'Sweet',
    tags: ['new', 'glitter'],
  },
  {
    id: '3',
    name: 'Cotton Candy Kiss',
    price: 12.99,
    image: '/images/product3.jpg',
    description: 'Cotton candy flavor with rainbow sparkles',
    category: 'Sweet',
    tags: ['bestseller', 'sparkle'],
  },
]

const benefits = [
  {
    title: 'Cruelty-Free',
    description: 'All our products are never tested on animals',
    icon: '🐰',
  },
  {
    title: 'Vegan Ingredients',
    description: 'Made with plant-based, natural ingredients',
    icon: '🌱',
  },
  {
    title: 'Teen-Approved',
    description: 'Designed and tested by teen beauty enthusiasts',
    icon: '✨',
  },
]

const testimonials = [
  {
    name: 'Emma S.',
    age: 16,
    text: 'I love how Gloss & Glam makes me feel confident. The Cotton Candy Kiss is my absolute favorite!',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Olivia K.',
    age: 15,
    text: 'These lip glosses are the best I\'ve ever tried. They\'re not sticky and last so long!',
    image: '/images/testimonial2.jpg',
  },
]

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden rounded-3xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Beauty background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Express Yourself with <span className="text-secondary">Gloss & Glam</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10"
          >
            Premium lip glosses designed for teens who want to shine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              Shop Collection
            </Link>
            <Link href="/about" className="btn-outline text-white border-white text-lg px-8 py-4 hover:bg-white hover:text-primary-dark">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-center p-8 rounded-2xl shadow-soft"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="section-title">
          <h2>Bestselling Lip Gloss</h2>
          <p>Discover our most popular products loved by teens everywhere</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/products" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-2xl">
        <div className="section-title">
          <h2>What Teens Say</h2>
          <p>Real reviews from our young beauty enthusiasts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-soft flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}, {testimonial.age}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-12">
        <div className="section-title">
          <h2>Follow Our Glam Journey</h2>
          <p>Join our community on Instagram @glossandglam</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <a 
              key={item} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square relative block overflow-hidden rounded-2xl group"
            >
              <Image
                src={`/images/product${item}.jpg`}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm">❤️ View on Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 px-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Glam Club</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers, beauty tips, and early access to new products!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-grow"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Join Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 