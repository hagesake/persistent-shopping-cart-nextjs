'use client'

import { useBoundStore } from '@/zustand/store'
import useStore from '@/hooks/useStore'
import Link from 'next/link'

const CartControls = () => {
  const { emptyCart } = useBoundStore().cart
  const inCartProducts = useStore(
    useBoundStore,
    state => state.cart.inCartProducts
  )

  const totalPrice =
    inCartProducts &&
    inCartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )

  return (
    <>
      <div className="flex items-center justify-end gap-4">
        <p>Total: {totalPrice}</p>
        {inCartProducts && inCartProducts.length > 0 && (
          <>
            <button
              onClick={emptyCart}
              className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
            >
              Empty cart
            </button>

            <Link
              href={'/order'}
              className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
            >
              Place Order
            </Link>
          </>
        )}
      </div>
    </>
  )
}

export default CartControls
