import type { Product, InCartProduct } from '@/types/types'
import { ImmerStateCreator } from './helpers'

export interface CartSlice {
  inCartProducts: InCartProduct[]

  addProduct: (product: Product) => void
  removeProduct: (productId: Product['id']) => void
  increaseQuantity: (productId: Product['id']) => void
  decreaseQuantity: (productId: Product['id']) => void
  emptyCart: () => void
  undoAddProduct: (productId: Product['id']) => void
}

export const createCartSlice: ImmerStateCreator<CartSlice> = set => {
  return {
    inCartProducts: [],

    addProduct: (product: Product) =>
      set(state => {
        if (state.inCartProducts.some(p => p.id === product.id)) {
          const index = state.inCartProducts.findIndex(p => p.id === product.id)
          state.inCartProducts[index].quantity += 1
        } else {
          state.inCartProducts.push({
            ...product,
            quantity: 1
          })
        }
      }),

    removeProduct: (productId: number) => {
      set(state => {
        state.inCartProducts = state.inCartProducts.filter(
          p => p.id !== productId
        )
      })
    },

    increaseQuantity: (productId: number) => {
      set(state => {
        const index = state.inCartProducts.findIndex(p => p.id === productId)
        state.inCartProducts[index].quantity += 1
      })
    },

    decreaseQuantity: (productId: number) => {
      set(state => {
        const index = state.inCartProducts.findIndex(p => p.id === productId)
        if (state.inCartProducts[index].quantity > 1) {
          state.inCartProducts[index].quantity -= 1
        }
      })
    },

    emptyCart: () => {
      set(state => {
        state.inCartProducts = []
      })
    },

    undoAddProduct: (productId: number) => {
      set(state => {
        const index = state.inCartProducts.findIndex(p => p.id === productId)
        if (state.inCartProducts[index].quantity > 1) {
          state.inCartProducts[index].quantity -= 1
        } else {
          state.inCartProducts = state.inCartProducts.filter(
            p => p.id !== productId
          )
        }
      })
    }
  }
}
