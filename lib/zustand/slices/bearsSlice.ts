import { StateCreator } from 'zustand'
import { BearsSlice, CombinedState } from './types'

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
        state.bears.bears += 1
      }),

    killBear: () =>
      set(state => {
        state.bears.bears -= 1
      })
  }
}
