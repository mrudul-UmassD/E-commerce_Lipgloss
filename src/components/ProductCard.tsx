'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product;
  key?: string;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageError, setImageError] = useState(false)

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-card bg-white"
    >
      <div className="relative">
        {/* Product tags */}
        {product.tags?.includes('bestseller') && (
          <span className="product-tag bestseller">Bestseller</span>
        )}
        {product.tags?.includes('new') && (
          <span className="product-tag new">New</span>
        )}
        
        {/* Wishlist button */}
        <button 
          onClick={toggleWishlist}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-sm"
        >
          {isWishlisted ? (
            <HeartIconSolid className="w-5 h-5 text-primary" />
          ) : (
            <HeartIcon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        
        {/* Product image or placeholder */}
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-square overflow-hidden">
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">{product.name}</span>
              </div>
            ) : (
              <div 
                className="w-full h-full bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
                style={{ 
                  backgroundImage: `url(${product.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </Link>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{product.name}</h3>
          <p className="text-primary-dark font-semibold">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </div>
        
        <div className="flex space-x-2">
          <Link 
            href={`/products/${product.id}`}
            className="btn-outline flex-1 py-2 text-sm"
          >
            Details
          </Link>
          <button 
            className="btn-primary flex-1 py-2 text-sm flex items-center justify-center"
          >
            <ShoppingBagIcon className="w-4 h-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard 