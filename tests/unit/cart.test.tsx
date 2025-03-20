import { render, screen, fireEvent } from '@testing-library/react'
import { useCartStore } from '@/store/cartStore'
import CartPage from '@/app/cart/page'
import { CartItem } from '@/types/cart'

// Mock the cart store
jest.mock('@/store/cartStore', () => ({
  useCartStore: jest.fn()
}))

describe('Cart Functionality', () => {
  // Mock cart items
  const mockItems: CartItem[] = [
    {
      id: '1',
      name: 'Strawberry Dreams Lip Gloss',
      price: 12.99,
      quantity: 2,
      image: '/images/product1.jpg',
    },
  ]

  // Mock store functions
  const mockRemoveItem = jest.fn()
  const mockUpdateQuantity = jest.fn()
  const mockGetTotalPrice = jest.fn().mockReturnValue(25.98)

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Mock the implementation for useCartStore
    // Return the correct value for each selector function
    (useCartStore as jest.Mock).mockImplementation((selector) => {
      // When the component calls useCartStore((state) => state.something)
      if (typeof selector === 'function') {
        const mockState = {
          items: mockItems,
          removeItem: mockRemoveItem,
          updateQuantity: mockUpdateQuantity,
          getTotalPrice: mockGetTotalPrice,
          getTotalItems: () => 2,
          addItem: jest.fn(),
          clearCart: jest.fn(),
        }
        return selector(mockState)
      }
    })
  })

  it('renders cart items correctly', () => {
    render(<CartPage />)
    
    // After the loading state disappears, the cart items should be visible
    expect(screen.getByText('Strawberry Dreams Lip Gloss')).toBeInTheDocument()
    expect(screen.getByText('$12.99')).toBeInTheDocument()
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
  })

  it('calls removeItem when remove button is clicked', () => {
    render(<CartPage />)
    
    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    
    expect(mockRemoveItem).toHaveBeenCalledWith('1')
  })

  it('calls updateQuantity when quantity is changed', () => {
    render(<CartPage />)
    
    const quantitySelect = screen.getByRole('combobox')
    fireEvent.change(quantitySelect, { target: { value: '3' } })
    
    expect(mockUpdateQuantity).toHaveBeenCalledWith('1', 3)
  })

  it('displays empty cart message when no items', () => {
    // For this test, mock the store to return empty items
    (useCartStore as jest.Mock).mockImplementation((selector) => {
      if (typeof selector === 'function') {
        const emptyState = {
          items: [], // Empty cart
          removeItem: mockRemoveItem,
          updateQuantity: mockUpdateQuantity,
          getTotalPrice: () => 0,
          getTotalItems: () => 0,
          addItem: jest.fn(),
          clearCart: jest.fn(),
        }
        return selector(emptyState)
      }
    })

    render(<CartPage />)
    
    expect(screen.getByText('Your Cart is Empty')).toBeInTheDocument()
    expect(screen.getByText('Add some products to your cart!')).toBeInTheDocument()
  })
}) 