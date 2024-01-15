const ReceiversDataForm = () => {
  return (
    <>
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div>
            <input
              type="text"
              id="nombre"
              autoComplete="false"
              className="w-full rounded"
            />
            <label htmlFor="">Receiver`&apos;`s name</label>
          </div>

          <div>
            <input type="text" className="w-full rounded" />
            <label htmlFor="">Receiver`&apos;`s address</label>
          </div>
        </div>

        <div className="space-x-4">
          <button
            type="button"
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
