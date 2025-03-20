export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
} 