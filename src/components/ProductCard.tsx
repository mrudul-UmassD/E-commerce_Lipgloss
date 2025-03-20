'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product;
  key?: string;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const isBestseller = product.tags?.includes('bestseller')
  const isNew = product.tags?.includes('new')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="product-card relative group"
    >
      {/* Wishlist button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute right-3 top-3 z-10 bg-white rounded-full p-1.5 shadow-md opacity-90 hover:opacity-100 transition-all"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isWishlisted ? (
          <HeartSolidIcon className="h-5 w-5 text-primary-dark" />
        ) : (
          <HeartIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>

      <div className="product-image-container">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="product-image"
          />
        </Link>
        
        {/* Product badges */}
        {isBestseller && (
          <span className="absolute top-3 left-3 bg-primary-dark text-white text-xs font-bold px-3 py-1 rounded-full">
            Bestseller
          </span>
        )}
        {isNew && !isBestseller && (
          <span className="absolute top-3 left-3 bg-accent-dark text-white text-xs font-bold px-3 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      <div className="p-3">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-bold mt-2 mb-1 hover:text-primary-dark transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary-dark">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex space-x-2">
            <Link
              href={`/products/${product.id}`}
              className="btn-secondary text-sm px-3 py-1.5"
            >
              Details
            </Link>
            <button 
              className="bg-primary text-white p-1.5 rounded-full hover:bg-primary-dark transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBagIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard 