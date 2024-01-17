import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { merge } from 'lodash'

import type { CombinedState } from './slices/types'

import { createCartSlice } from './slices/cartSlice'
import { createBearsSlice } from './slices/bearsSlice'

const useBoundStore = create<CombinedState>()(
  persist(
    immer((...args) => {
      return {
        cart: { ...createCartSlice(...args) },
        bears: { ...createBearsSlice(...args) }
      }
    }),
    {
      name: 'shopping_cart',
      partialize: state => {
        return {
          cart: {
            ...state.cart,
            inCartProducts: state.cart.inCartProducts
          }
        }
      },
      merge: (persistedState, currentState) => {
        return deepMerge<CombinedState>(
          persistedState as CombinedState,
          currentState
        )
      }
    }
  )
)

export const useCart = () => useBoundStore(state => state.cart.inCartProducts)
export const useCartActions = () => useBoundStore(state => state.cart.actions)

export const useBears = () => useBoundStore(state => state.bears.bears)
export const useBearsActions = () => useBoundStore(state => state.bears.actions)

export default useBoundStore

/**
 * Use a deep-merge function when the state in the zustand store that you want to persist is an object with nested properties fileds.
 * By default, the middleware does a shallow merge. The shallow merge might not be enough if you have partially persisted nested objects.
 *
 * @param persistedState
 * @param currentState
 * @returns
 */
function deepMerge<T extends object>(persistedState: T, currentState: T): T {
  return merge({}, persistedState, currentState)
}

// const dm = <T extends object>(p: T, c: T): T => {
//   return merge({}, p, c)
// }
