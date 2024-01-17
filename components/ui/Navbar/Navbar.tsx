'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useBoundStore } from '@/zustand/cart_store/store'
import useStore from '@/hooks/useStore'

import { useFishes } from '@/zustand/fish_store/store'

const ROUTES = [
  { name: 'CART', path: '/cart' },
  {
    name: 'ABOUT',
    path: '/about'
  }
]

const Navbar = () => {
  const pathname = usePathname()

  const { bears } = useBoundStore().bears
  const inCartProducts = useStore(
    useBoundStore,
    state => state.cart.inCartProducts
  )

  const fishes = useFishes()

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between bg-slate-400 p-4">
        <div>
          <Link href={'/'}>LOGO</Link>
        </div>

        <div className="flex items-center gap-2">
          <p>Bears: {bears}</p>
          <p>Fishes: {fishes}</p>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            {ROUTES.map(route => {
              return (
                <li key={route.name} className="flex items-center gap-1">
                  <Link
                    href={route.path}
                    className={`${pathname === route.path ? 'border- border-b-2 border-slate-800 text-slate-800' : ''}`}
                  >
                    {route.name}
                  </Link>
                  {route.name === 'CART' && (
                    <div className="rounded-full bg-slate-200 px-2">
                      <p className="text-center text-slate-600">
                        {inCartProducts && inCartProducts.length}
                      </p>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
