'use client'

import ProductList from '@/ui/components/Products/ProductList'
import InCartProductCard from '@/ui/components/Products/InCartProductCard'

import { useCartStore } from '@/lib/zustand/store'

const ShoppingCartPage = () => {
  const { inCartProducts, emptyCart } = useCartStore()

  const totalPrice = inCartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (
    <>
      <main className="flex flex-col space-y-2 p-4">
        <h1>This is the shopping cart page</h1>

        <div className="flex items-center justify-end gap-4">
          <p>Total: {totalPrice}</p>
          {inCartProducts.length > 0 && (
            <button
              onClick={emptyCart}
              className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
            >
              Empty cart
            </button>
          )}
        </div>

        <ProductList>
          {inCartProducts.map(product => (
            <InCartProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </main>
    </>
  )
}

export default ShoppingCartPage
