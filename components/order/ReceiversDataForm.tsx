'use client'

import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'

type FormData = {
  fullName: string
  address: string
}

const initFormState: FormData = {
  fullName: '',
  address: ''
}

const ReceiversDataForm = () => {
  const { fullName, address, form, handleChange } = useForm(initFormState)
  const { push } = useRouter()

  return (
    <>
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="false"
              value={fullName}
              onChange={handleChange}
              className="w-full rounded"
            />
            <label htmlFor="fullName">Receiver`&apos;`s name</label>
          </div>

          <div>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="false"
              value={address}
              onChange={handleChange}
              className="w-full rounded"
            />
            <label htmlFor="address">Receiver`&apos;`s address</label>
          </div>
        </div>

        <div className="space-x-4">
          <button
            type="button"
            onClick={() => push('/')}
            className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-slate-600 px-2 py-1 text-sm text-slate-100"
          >
            Go to Checkout
          </button>
        </div>
      </form>
    </>
  )
}

export default ReceiversDataForm
