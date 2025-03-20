'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { CartItem } from '@/types/cart'

export default function CartPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [cartError, setCartError] = useState<string | null>(null)
  
  // Get cart data from store
  const items = useCartStore((state) => state.items) || []
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  
  // Set loading state to false after initial render
  useEffect(() => {
    setIsLoading(false)
  }, [])
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-12"></div>
          <div className="h-24 bg-gray-200 rounded mb-4"></div>
          <div className="h-24 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    )
  }
  
  // Show error state if any
  if (cartError) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Something went wrong</h1>
        <p className="text-red-500 text-center mb-8">{cartError}</p>
        <div className="flex justify-center">
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }
  
  // Show empty cart view
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart is Empty</h1>
        <p className="text-gray-500 text-center mb-8">Add some products to your cart!</p>
        <div className="flex justify-center">
          <Link href="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  // Safe calculation of total price
  const calculateTotal = () => {
    try {
      const total = getTotalPrice();
      return isNaN(total) ? '0.00' : total.toFixed(2);
    } catch (error) {
      console.error('Error calculating total price:', error);
      return '0.00';
    }
  };

  // Show cart with items
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {Array.isArray(items) && items.map((item) => (
          <CartItemCard 
            key={item.id} 
            item={item} 
            onRemove={removeItem} 
            onUpdateQuantity={updateQuantity} 
          />
        ))}
      </div>
      
      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold">Total</span>
          <span className="text-2xl font-bold text-primary-dark">${calculateTotal()}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="btn-outline flex-1 text-center py-3">
            Continue Shopping
          </Link>
          <Link href="/checkout" className="btn-primary flex-1 text-center py-3">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

interface CartItemCardProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

function CartItemCard({ item, onRemove, onUpdateQuantity }: CartItemCardProps) {
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value, 10)
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity)
    }
  }
  
  // Handle removal with confirmation
  const handleRemove = () => {
    if (typeof onRemove === 'function') {
      onRemove(item.id)
    }
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card p-4 flex flex-col sm:flex-row gap-4"
    >
      <div className="sm:w-28 sm:h-28 h-40 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-primary-dark font-bold">{item.name.charAt(0)}</span>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-primary-dark font-medium">${parseFloat(item.price.toString()).toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm">
              Quantity:
            </label>
            <select 
              id={`quantity-${item.id}`}
              value={item.quantity} 
              onChange={handleQuantityChange}
              className="border rounded p-1"
              role="combobox"
            >
              {quantityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <button 
            onClick={handleRemove}
            className="text-red-500 text-sm hover:text-red-700 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
      
      <div className="sm:self-center text-right sm:ml-4">
        <span className="font-bold">
          ${(parseFloat(item.price.toString()) * item.quantity).toFixed(2)}
        </span>
      </div>
    </motion.div>
  )
} 