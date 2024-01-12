import { create } from 'zustand'

import type { Product, InCartProduct } from '@/lib/types/types'

export type Store = {
  inCartProducts: InCartProduct[]
  addProduct: (product: Product) => void
  removeProduct: (productId: Product['id']) => void
  increaseQuantity: (productId: Product['id']) => void
  decreaseQuantity: (productId: Product['id']) => void
}

export const useCartStore = create<Store>()((set, get) => ({
  inCartProducts: [],
  addProduct: (product: Product) => {
    set(state => {
      if (state.inCartProducts.some(p => p.id === product.id)) {
        return {
          inCartProducts: state.inCartProducts.map(p => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity + 1 }
            }
            return p
          })
        }
      } else {
        return {
          inCartProducts: [...state.inCartProducts, { ...product, quantity: 1 }]
        }
      }
    })
  },

  removeProduct: (productId: number) => {
    set(state => {
      return {
        inCartProducts: state.inCartProducts.filter(p => p.id !== productId)
      }
    })
  },

  increaseQuantity: (productId: number) => {
    set(state => {
      return {
        inCartProducts: state.inCartProducts.map(p => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity + 1 }
          }
          return p
        })
      }
    })
  },

  decreaseQuantity: (productId: number) => {
    set(state => {
      return {
        inCartProducts: state.inCartProducts.map(p => {
          if (p.id === productId) {
            if (p.quantity > 1) {
              return { ...p, quantity: p.quantity - 1 }
            } else {
              return p
            }
          }
          return p
        })
      }
    })
  }
}))
