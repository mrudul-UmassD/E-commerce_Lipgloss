import { render, screen, fireEvent } from '@testing-library/react'
import { useCartStore } from '@/store/cartStore'
import CartPage from '@/app/cart/page'

// Mock the cart store
jest.mock('@/store/cartStore', () => ({
  useCartStore: jest.fn()
}))

describe('Cart Functionality', () => {
  const mockItems = [
    {
      id: '1',
      name: 'Strawberry Dreams Lip Gloss',
      price: 12.99,
      quantity: 2,
      image: '/images/product1.jpg',
    },
  ]

  const mockRemoveItem = jest.fn()
  const mockUpdateQuantity = jest.fn()
  const mockGetTotalPrice = jest.fn().mockReturnValue(25.98)

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Mock the implementation for useCartStore
    // This is the critical part that was causing the issue
    // We need to make sure it returns the correct value for each selector
    (useCartStore as jest.Mock).mockImplementation((selector) => {
      // If the selector is a function (which is how zustand selectors work)
      if (typeof selector === 'function') {
        // Create our mock state
        const state = {
          items: mockItems,
          removeItem: mockRemoveItem,
          updateQuantity: mockUpdateQuantity,
          getTotalPrice: mockGetTotalPrice
        }
        // Call the selector with our state
        return selector(state)
      }
    })
  })

  it('renders cart items correctly', () => {
    render(<CartPage />)
    
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
        const state = {
          items: [], // Empty cart
          removeItem: mockRemoveItem,
          updateQuantity: mockUpdateQuantity,
          getTotalPrice: mockGetTotalPrice
        }
        return selector(state)
      }
    })

    render(<CartPage />)
    
    expect(screen.getByText('Your Cart is Empty')).toBeInTheDocument()
    expect(screen.getByText('Add some products to your cart!')).toBeInTheDocument()
  })
}) 