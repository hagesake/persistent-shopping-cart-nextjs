'use client'

type Props = {
  children: JSX.Element[]
}

const ProductList = ({ children }: Props) => {
  return (
    <>
      <section className="grid items-center justify-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </section>
    </>
  )
}

export default ProductList
