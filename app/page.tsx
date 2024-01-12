import ProductList from '@/ui/components/Products/ProductList'
import ProductCard from '@/ui/components/Products/ProductCard'
import type { Product } from '@/lib/types/types'

const products: Product[] = [
  {
    id: 1,
    name: 'Lockpick',
    price: 1,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  },
  {
    id: 2,
    name: 'Blade of Woe',
    price: 10,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  },
  {
    id: 3,
    name: 'Ancient Shroudded Armor',
    price: 20,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  },
  {
    id: 4,
    name: 'Ancient Shroudded Gloves',
    price: 30,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  },
  {
    id: 5,
    name: 'Ancient Shroudded Hood',
    price: 40,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  },
  {
    id: 6,
    name: 'Ancient Shroudded Boots',
    price: 50,
    description: 'Lorem ipsum dolor sit amet. This is the product description'
  }
]

const Home = () => {
  return (
    <>
      <main className="flex flex-col space-y-2 p-4">
        <h1>This is the home page</h1>

        <ProductList>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </main>
    </>
  )
}

export default Home
