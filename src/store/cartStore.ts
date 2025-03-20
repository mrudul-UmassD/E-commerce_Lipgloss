import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState, CartItem } from '@/types/cart'

// Helper to ensure items is always an array
const ensureItemsArray = (items: any): CartItem[] => {
  if (!items) return [];
  if (!Array.isArray(items)) return [];
  return items;
};

// Create the cart store with persistence
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item: CartItem) => {
        try {
          if (!item || !item.id) {
            console.error('Invalid item provided to addItem:', item);
            return;
          }
          
          set((state) => {
            const currentItems = ensureItemsArray(state.items);
            const existingItem = currentItems.find((i) => i.id === item.id);
            
            if (existingItem) {
              return {
                items: currentItems.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                ),
              };
            }
            
            return { items: [...currentItems, item] };
          });
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
      },
      
      removeItem: (id: string) => {
        try {
          if (!id) {
            console.error('Invalid id provided to removeItem');
            return;
          }
          
          set((state) => {
            const currentItems = ensureItemsArray(state.items);
            return {
              items: currentItems.filter((item) => item.id !== id),
            };
          });
        } catch (error) {
          console.error('Error removing item from cart:', error);
        }
      },
      
      updateQuantity: (id: string, quantity: number) => {
        try {
          if (!id || typeof quantity !== 'number' || quantity < 1) {
            console.error('Invalid parameters provided to updateQuantity:', { id, quantity });
            return;
          }
          
          set((state) => {
            const currentItems = ensureItemsArray(state.items);
            return {
              items: currentItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
              ),
            };
          });
        } catch (error) {
          console.error('Error updating quantity in cart:', error);
        }
      },
      
      clearCart: () => {
        try {
          set({ items: [] });
        } catch (error) {
          console.error('Error clearing cart:', error);
        }
      },
      
      getTotalPrice: () => {
        try {
          const { items } = get();
          const currentItems = ensureItemsArray(items);
          return currentItems.reduce(
            (total, item) => total + parseFloat(item.price.toString()) * item.quantity, 
            0
          );
        } catch (error) {
          console.error('Error getting total price:', error);
          return 0;
        }
      },
      
      getTotalItems: () => {
        try {
          const { items } = get();
          const currentItems = ensureItemsArray(items);
          return currentItems.reduce((total, item) => total + item.quantity, 0);
        } catch (error) {
          console.error('Error getting total items:', error);
          return 0;
        }
      }
    }),
    {
      name: 'cart-storage', // Name for the localStorage key
      partialize: (state) => ({ items: state.items }), // Only persist items
      onRehydrateStorage: () => (state) => {
        // When storage is rehydrated, log that it happened
        console.log('Cart hydrated from storage');
        
        // If the state wasn't properly rehydrated, initialize with empty array
        if (!state || !Array.isArray(state.items)) {
          console.warn('Invalid state structure after rehydration');
          set(get(), { items: [] });
        }
      }
    }
  )
) 