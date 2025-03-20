'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const products = [
  {
    id: '1',
    name: 'Strawberry Dreams Lip Gloss',
    price: 12.99,
    image: '/images/product1.jpg',
    description: 'Sweet strawberry flavor with a subtle shimmer',
    category: 'Fruity',
  },
  {
    id: '2',
    name: 'Bubblegum Pop Lip Gloss',
    price: 12.99,
    image: '/images/product2.jpg',
    description: 'Bubblegum scent with holographic glitter',
    category: 'Sweet',
  },
  {
    id: '3',
    name: 'Cotton Candy Kiss Lip Gloss',
    price: 12.99,
    image: '/images/product3.jpg',
    description: 'Cotton candy flavor with rainbow sparkles',
    category: 'Sweet',
  },
  {
    id: '4',
    name: 'Watermelon Splash Lip Gloss',
    price: 12.99,
    image: '/images/product4.jpg',
    description: 'Refreshing watermelon with cooling effect',
    category: 'Fruity',
  },
  {
    id: '5',
    name: 'Vanilla Bean Lip Gloss',
    price: 12.99,
    image: '/images/product5.jpg',
    description: 'Creamy vanilla with golden shimmer',
    category: 'Sweet',
  },
  {
    id: '6',
    name: 'Mango Tango Lip Gloss',
    price: 12.99,
    image: '/images/product6.jpg',
    description: 'Tropical mango with orange sparkles',
    category: 'Fruity',
  },
]

const categories = ['All', 'Fruity', 'Sweet']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === 'All' ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
    </div>
  )
} 