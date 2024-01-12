export type Product = {
  id: number
  name: string
  price: number
  description: string
}

export type InCartProduct = Product & {
  quantity: number
}
