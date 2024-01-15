import { OrderBrieffing, ReceiversDataForm } from '@/components/order'

const OrderConfigPage = () => {
  console.log('Order page server...')

  return (
    <>
      <div className="space-y-2 p-4">
        <h1>This is the OrderConfigPage</h1>

        <OrderBrieffing />

        <ReceiversDataForm />
      </div>
    </>
  )
}

export default OrderConfigPage
