import { StateCreator } from 'zustand'
import { BearsSlice, CombinedState } from './types'

import useFishStore from '@/zustand/fish_store/store'

export const createBearsSlice: StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [],
  BearsSlice
> = set => {
  return {
    bears: 0,

    addBear: () =>
      set(state => {
        const b = state.bears.bears
        state.bears.bears += 1
        useFishStore.setState(state => {
          if (b == state.fishes) state.fishes += 1
        })
      }),

    killBear: () =>
      set(state => {
        state.bears.bears -= 1
      })
  }
}
