'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'

const products = [
  {
    id: '1',
    name: 'Strawberry Dreams Lip Gloss',
    price: 12.99,
    image: '/images/product1.jpg',
    description: 'Sweet strawberry flavor with a subtle shimmer',
    category: 'Fruity',
    details: 'Our Strawberry Dreams lip gloss provides a perfect blend of shine and moisture. Made with natural ingredients, it nourishes your lips while giving them a gorgeous glow. The subtle shimmer catches the light beautifully, and the sweet strawberry scent is perfect for everyday wear.'
  },
  {
    id: '2',
    name: 'Bubblegum Pop Lip Gloss',
    price: 12.99,
    image: '/images/product2.jpg',
    description: 'Bubblegum scent with holographic glitter',
    category: 'Sweet',
    details: 'Make a statement with our Bubblegum Pop lip gloss! This fun formula features stunning holographic glitters that shift colors in different lighting. The nostalgic bubblegum scent will bring back childhood memories, while the moisturizing formula keeps your lips soft and supple.'
  },
  {
    id: '3',
    name: 'Cotton Candy Kiss Lip Gloss',
    price: 12.99,
    image: '/images/product3.jpg',
    description: 'Cotton candy flavor with rainbow sparkles',
    category: 'Sweet',
    details: 'Our Cotton Candy Kiss lip gloss is a carnival in a tube! Featuring playful rainbow sparkles suspended in a sheer pink base, this gloss adds a touch of magic to your makeup look. The sweet cotton candy flavor makes application a treat.'
  },
  {
    id: '4',
    name: 'Watermelon Splash Lip Gloss',
    price: 12.99,
    image: '/images/product4.jpg',
    description: 'Refreshing watermelon with cooling effect',
    category: 'Fruity',
    details: 'Cool down with our Watermelon Splash lip gloss. This refreshing formula features a subtle cooling effect that makes your lips feel fresh and invigorated. The juicy watermelon scent is perfect for the summer months, and the glossy finish looks great on everyone.'
  },
  {
    id: '5',
    name: 'Vanilla Bean Lip Gloss',
    price: 12.99,
    image: '/images/product5.jpg',
    description: 'Creamy vanilla with golden shimmer',
    category: 'Sweet',
    details: 'Our Vanilla Bean lip gloss is sophisticated and sweet. The warm vanilla scent is comforting and delicious, while the golden shimmer adds a touch of luxury. The creamy formula glides on smoothly and provides long-lasting hydration.'
  },
  {
    id: '6',
    name: 'Mango Tango Lip Gloss',
    price: 12.99,
    image: '/images/product6.jpg',
    description: 'Tropical mango with orange sparkles',
    category: 'Fruity',
    details: 'Bring the tropics to your lips with our Mango Tango lip gloss. This vibrant formula features playful orange sparkles that catch the light beautifully. The tropical mango scent will transport you to a beachside paradise, and the hydrating formula keeps your lips soft and smooth.'
  },
]

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === id)

  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    })
    alert('Product added to cart!')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-bold text-primary">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        
        <div className="border-t border-b py-6 my-6">
          <p className="text-gray-800 leading-relaxed">{product.details}</p>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input-field w-20"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleAddToCart}
            className="btn-primary flex-grow"
          >
            Add to Cart
          </button>
          <Link href="/cart" className="btn-secondary">
            View Cart
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 