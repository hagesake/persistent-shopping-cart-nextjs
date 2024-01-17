import type { InCartProduct, Product } from '@/types/types'

export interface BearsSlice {
  bears: number
  addBear: () => void
  killBear: () => void
}

export interface CartSlice {
  inCartProducts: InCartProduct[]

  addProduct: (product: Product) => void
  removeProduct: (productId: Product['id']) => void
  increaseQuantity: (productId: Product['id']) => void
  decreaseQuantity: (productId: Product['id']) => void
  emptyCart: () => void
  undoAddProduct: (productId: Product['id']) => void
}

export type StateType = CartSlice & BearsSlice

export type CombinedState = {
  cart: CartSlice
  bears: BearsSlice
}
