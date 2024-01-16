import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

import { createCartSlice, CartSlice } from './slices/cartSlice'

export const useCartStore = create<CartSlice>()(
  persist(
    immer((...args) => ({
      ...createCartSlice(...args)
    })),
    { name: 'shopping_cart' }
  )
)
