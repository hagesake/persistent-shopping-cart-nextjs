'use client'

import { useBears, useBearsActions } from '@/zustand/cart_store/store'

const BearCounter = () => {
  const bears = useBears()
  const { addBear, killBear } = useBearsActions()

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
