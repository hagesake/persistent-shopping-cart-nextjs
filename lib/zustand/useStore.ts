// This is a custom hook to use the persisted data of the store in Nextjs
// and avoid conflicts with the server rendered HTML
// See the official docs https://docs.pmnd.rs/zustand/integrations/persisting-store-data#usage-in-next.js

import { useState, useEffect } from 'react'

/**
 * Use this function when you want to fix the "hydration" error in NextJS
 * @param store
 * @param callback
 */

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>()

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useStore
