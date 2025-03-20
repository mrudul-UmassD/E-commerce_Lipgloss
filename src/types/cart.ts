/**
 * Represents a cart item in the shopping cart
 */
export interface CartItem {
  /** Unique identifier for the cart item */
  id: string
  /** Product name */
  name: string
  /** Product price in dollars */
  price: number
  /** Quantity of the product */
  quantity: number
  /** URL to the product image */
  image: string
  /** Optional product description */
  description?: string
  /** Optional product category */
  category?: string
}

/**
 * Cart store state and actions
 */
export interface CartState {
  /** Array of cart items */
  items: CartItem[]
  
  /**
   * Add an item to the cart
   * If item already exists in cart, its quantity will be increased
   */
  addItem: (item: CartItem) => void
  
  /**
   * Remove an item from the cart by its ID
   */
  removeItem: (itemId: string) => void
  
  /**
   * Update the quantity of an item in the cart
   */
  updateQuantity: (itemId: string, quantity: number) => void
  
  /**
   * Clear all items from the cart
   */
  clearCart: () => void
  
  /**
   * Calculate the total price of all items in the cart
   */
  getTotalPrice: () => number
  
  /**
   * Get the total number of items in the cart
   */
  getTotalItems: () => number
} 