import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import useBoundStore from '../cart_store/store'

type FishStore = {
  fishes: number

  actions: {
    addFish: () => void
    killFish: () => void
  }
}

const useFishStore = create<FishStore>()(
  immer((set, get) => ({
    fishes: 0,

    actions: {
      addFish: () =>
        set(state => {
          state.fishes += 1
        }),
      killFish: () =>
        set(state => {
          const bears = useBoundStore.getState().bears.bears

          if (state.fishes > bears) {
            state.fishes -= 1
          }
        })
    }
  }))
)

export const useFishes = () => useFishStore(state => state.fishes)
export const useFishesActions = () => useFishStore(state => state.actions)

export default useFishStore
