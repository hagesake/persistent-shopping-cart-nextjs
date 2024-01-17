'use client'

import useBoundStore from '@/zustand/cart_store/store'
import useStore from '@/hooks/useStore'

const OrderBrieffing = () => {
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
      <section>
        {inCartProducts &&
          inCartProducts.map(product => {
            return (
              <div key={product.id}>
                <p>{product.name}</p>
                <div className="flex items-center justify-between ">
                  <p>
                    ${product.price} U:{product.quantity}
                  </p>
                  <p>Sub-total: {product.price * product.quantity}</p>
                </div>

                <hr className="border-b-2 border-slate-400 px-4" />
              </div>
            )
          })}

        <div className="flex justify-end">
          <p>Total: {totalPrice}</p>
        </div>
      </section>
    </>
  )
}

export default OrderBrieffing
