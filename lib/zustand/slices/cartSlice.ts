import type { Product } from '@/types/types'
import type { StateCreator } from 'zustand'
import type { CartSlice, CombinedState } from './types'

export const createCartSlice: StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [['zustand/persist', Partial<CartSlice>]],
  CartSlice
> = set => {
  return {
    inCartProducts: [],

    addProduct: (product: Product) =>
      set(state => {
        if (state.cart.inCartProducts.some(p => p.id === product.id)) {
          const index = state.cart.inCartProducts.findIndex(
            p => p.id === product.id
          )
          state.cart.inCartProducts[index].quantity += 1
        } else {
          state.cart.inCartProducts.push({
            ...product,
            quantity: 1
          })
        }
      }),

    removeProduct: (productId: number) => {
      set(state => {
        state.cart.inCartProducts = state.cart.inCartProducts.filter(
          p => p.id !== productId
        )
      })
    },

    increaseQuantity: (productId: number) => {
      set(state => {
        const index = state.cart.inCartProducts.findIndex(
          p => p.id === productId
        )
        state.cart.inCartProducts[index].quantity += 1
      })
    },

    decreaseQuantity: (productId: number) => {
      set(state => {
        const index = state.cart.inCartProducts.findIndex(
          p => p.id === productId
        )
        if (state.cart.inCartProducts[index].quantity > 1) {
          state.cart.inCartProducts[index].quantity -= 1
        }
      })
    },

    emptyCart: () => {
      set(state => {
        state.cart.inCartProducts = []
      })
    },

    undoAddProduct: (productId: number) => {
      set(state => {
        const index = state.cart.inCartProducts.findIndex(
          p => p.id === productId
        )
        if (state.cart.inCartProducts[index].quantity > 1) {
          state.cart.inCartProducts[index].quantity -= 1
        } else {
          state.cart.inCartProducts = state.cart.inCartProducts.filter(
            p => p.id !== productId
          )
        }
      })
    }
  }
}
