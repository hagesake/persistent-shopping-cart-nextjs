import { CartControls, InCartProductsList } from '@/components/cart'

const ShoppingCartPage = () => {
  return (
    <>
      <main className="flex flex-col space-y-2 p-4">
        <h1>This is the shopping cart page</h1>

        <CartControls />

        <InCartProductsList />
      </main>
    </>
  )
}

export default ShoppingCartPage
