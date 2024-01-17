'use client'

import { useFishes, useFishesActions } from '@/zustand/fish_store/store'

const FishCounter = () => {
  const fishes = useFishes()
  const { addFish, killFish } = useFishesActions()
  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <div className="space-x-2">
          <button
            onClick={() => {
              killFish()
            }}
            className="rounded bg-slate-600 p-2  text-sm font-bold text-white"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              addFish()
            }}
            className="rounded bg-slate-600 p-2  text-sm font-bold text-white"
          >
            Increase
          </button>
        </div>
        <div>
          <p className="text-xl font-bold ">{`fishes: ${fishes}`}</p>
        </div>
      </section>
    </>
  )
}

export default FishCounter
