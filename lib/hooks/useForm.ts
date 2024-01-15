import { ChangeEvent, useState } from 'react'

export const useForm = <T extends object>(initstate: T) => {
  const [form, setForm] = useState(initstate)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  return {
    form,
    handleChange,
    ...form
  }
}
