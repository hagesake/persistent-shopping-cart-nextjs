'use client'

import ProductList from '@/ui/components/Products/ProductList'
import InCartProductCard from '@/ui/components/Products/InCartProductCard'

import { useCartStore } from '@/lib/zustand/store'

const ShoppingCartPage = () => {
  const { inCartProducts } = useCartStore()

  return (
    <>
      <main className="flex flex-col p-4">
        <h1>This is the shopping cart page</h1>

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
