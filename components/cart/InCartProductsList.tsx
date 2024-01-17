'use client'

import useBoundStore from '@/zustand/cart_store/store'
import useStore from '@/hooks/useStore'

import ProductList from '../ui/Products/ProductList'
import InCartProductCard from './InCartProductCard'

const InCartProductsList = () => {
  const inCartProducts = useStore(
    useBoundStore,
    state => state.cart.inCartProducts
  )

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
