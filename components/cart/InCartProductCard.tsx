import type { InCartProduct } from '@/types/types'

import { useCartActions } from '@/zustand/cart_store/store'

type Props = {
  product: InCartProduct
}

const InCartProductCard = ({ product }: Props) => {
  const { removeProduct, increaseQuantity, decreaseQuantity } = useCartActions()

  return (
    <>
      <div className="flex max-w-sm space-x-2 rounded-lg border border-slate-600 p-2">
        <div className="rounded-lg bg-slate-600 p-10"></div>
        <div className="">
          <div>
            <h4>{product.name}</h4>
            <p className="text-xs">{product.description}</p>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <p>Price:</p>
              <p>${product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  decreaseQuantity(product.id)
                }}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  increaseQuantity(product.id)
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <button
              onClick={() => removeProduct(product.id)}
              className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InCartProductCard
