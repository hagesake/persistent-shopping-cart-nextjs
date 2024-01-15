'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useCartStore } from '@/lib/zustand/store'
import useStore from '@/lib/zustand/useStore'

const ROUTES = [
  { name: 'CART', path: '/cart' },
  {
    name: 'ABOUT',
    path: '/about'
  }
]

const Navbar = () => {
  const pathname = usePathname()

  const inCartProducts = useStore(useCartStore, state => state.inCartProducts)

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between bg-slate-400 p-4">
        <div>
          <Link href={'/'}>LOGO</Link>
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
