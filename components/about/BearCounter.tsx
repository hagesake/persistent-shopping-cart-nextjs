'use client'

import { useBoundStore } from '@/zustand/store'

const BearCounter = () => {
  const { bears, addBear, killBear } = useBoundStore().bears
  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <div className="space-x-2">
          <button
            onClick={() => {
              killBear()
            }}
            className="rounded bg-slate-600 p-2  text-sm font-bold text-white"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              addBear()
            }}
            className="rounded bg-slate-600 p-2  text-sm font-bold text-white"
          >
            Increase
          </button>
        </div>
        <div>
          <p className="text-xl font-bold ">{`bears: ${bears}`}</p>
        </div>
      </section>
    </>
  )
}

export default BearCounter
