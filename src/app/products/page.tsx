'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FunnelIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Product } from '@/types/product'
import ProductCard from '@/components/ProductCard'

const products: Product[] = [
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
  {
    id: '4',
    name: 'Watermelon Splash',
    price: 12.99,
    image: '/images/product4.jpg',
    description: 'Refreshing watermelon with cooling effect',
    category: 'Fruity',
    tags: ['cooling', 'summer'],
  },
  {
    id: '5',
    name: 'Vanilla Bean',
    price: 12.99,
    image: '/images/product5.jpg',
    description: 'Creamy vanilla with golden shimmer',
    category: 'Sweet',
    tags: ['shimmer', 'subtle'],
  },
  {
    id: '6',
    name: 'Mango Tango',
    price: 12.99,
    image: '/images/product6.jpg',
    description: 'Tropical mango with orange sparkles',
    category: 'Fruity',
    tags: ['sparkle', 'summer'],
  },
]

const categories = ['All', 'Fruity', 'Sweet']
const tags = ['bestseller', 'new', 'shimmer', 'glitter', 'sparkle', 'cooling', 'summer', 'subtle']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  // Filter and sort products
  useEffect(() => {
    let result = [...products]
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      )
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory)
    }
    
    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter(product => 
        selectedTags.some(tag => product.tags.includes(tag))
      )
    }
    
    // Sort products
    result.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price
      }
      if (sortBy === 'price-desc') {
        return b.price - a.price
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
    
    setFilteredProducts(result)
  }, [selectedCategory, selectedTags, sortBy, searchQuery])

  // Toggle tag selection
  const toggleTag = (tag: string): void => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t: string) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedTags([])
    setSearchQuery('')
  }

  return (
    <div className="space-y-8">
      {/* Header and search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Our Products</h1>
          <p className="text-gray-600">Find your perfect lip gloss match</p>
        </div>
        
        <div className="w-full md:w-auto flex gap-3">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 pr-4 py-2 w-full"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-100 text-gray-700 p-2 rounded-lg md:hidden"
            aria-label="Toggle filters"
          >
            <FunnelIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block space-y-6">
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Attributes</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm capitalize ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-dark text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field w-full"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>

          {(selectedCategory !== 'All' || selectedTags.length > 0 || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-primary-dark hover:underline flex items-center gap-1 font-medium"
            >
              <XMarkIcon className="h-4 w-4" />
              Clear all filters
            </button>
          )}
        </div>

        {/* Filters - Mobile */}
        {showFilters && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="p-1"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowFilters(false)
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Attributes</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm capitalize ${
                        selectedTags.includes(tag)
                          ? 'bg-primary-dark text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field w-full"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={clearFilters}
                  className="flex-1 border border-gray-300 py-3 rounded-lg"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex-1 bg-primary text-white py-3 rounded-lg"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No products found</h2>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <button onClick={clearFilters} className="btn-primary">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-8 text-center text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 