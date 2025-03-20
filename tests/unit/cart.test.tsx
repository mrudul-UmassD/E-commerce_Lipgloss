import { render, screen, fireEvent } from '@testing-library/react'
import { useCartStore } from '@/store/cartStore'

// Mock the cart store
jest.mock('@/store/cartStore', () => ({
  useCartStore: jest.fn(),
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

  beforeEach(() => {
    ;(useCartStore as jest.Mock).mockImplementation(() => ({
      items: mockItems,
      removeItem: mockRemoveItem,
      updateQuantity: mockUpdateQuantity,
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders cart items correctly', () => {
    render(<div>Cart Page</div>)
    
    expect(screen.getByText('Strawberry Dreams Lip Gloss')).toBeInTheDocument()
    expect(screen.getByText('$12.99')).toBeInTheDocument()
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument()
  })

  it('calls removeItem when remove button is clicked', () => {
    render(<div>Cart Page</div>)
    
    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    
    expect(mockRemoveItem).toHaveBeenCalledWith('1')
  })

  it('calls updateQuantity when quantity is changed', () => {
    render(<div>Cart Page</div>)
    
    const quantitySelect = screen.getByRole('combobox')
    fireEvent.change(quantitySelect, { target: { value: '3' } })
    
    expect(mockUpdateQuantity).toHaveBeenCalledWith('1', 3)
  })

  it('displays empty cart message when no items', () => {
    ;(useCartStore as jest.Mock).mockImplementation(() => ({
      items: [],
      removeItem: mockRemoveItem,
      updateQuantity: mockUpdateQuantity,
    }))

    render(<div>Cart Page</div>)
    
    expect(screen.getByText('Your Cart is Empty')).toBeInTheDocument()
    expect(screen.getByText('Add some products to your cart!')).toBeInTheDocument()
  })
}) 