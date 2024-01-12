'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ROUTES = [
  { name: 'CART', path: '/cart' },
  {
    name: 'ABOUT',
    path: '/about'
  }
]

const Navbar = () => {
  const pathname = usePathname()

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
                <li key={route.name}>
                  <Link
                    href={route.path}
                    className={`${pathname === route.path ? 'border- border-b-2 border-slate-800 text-slate-800' : ''}`}
                  >
                    {route.name}
                  </Link>
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
