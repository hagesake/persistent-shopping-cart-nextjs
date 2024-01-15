'use client'

import { useCartStore } from '@/zustand/store'
import useStore from '@/hooks/useStore'

import ProductList from '../ui/Products/ProductList'
import InCartProductCard from './InCartProductCard'

const InCartProductsList = () => {
  const inCartProducts = useStore(useCartStore, state => state.inCartProducts)

  return (
    <>
      {inCartProducts && (
        <ProductList>
          {inCartProducts.map(product => (
            <InCartProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      )}
    </>
  )
}

export default InCartProductsList
