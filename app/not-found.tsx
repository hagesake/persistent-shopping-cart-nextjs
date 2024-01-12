import Link from 'next/link'

const NotFoundView = () => {
  return (
    <>
      <main className="flex  flex-col items-center justify-center gap-2 p-4">
        <h1 className="text-center text-xl font-semibold text-slate-400">
          Ooops! Something went wrong...
        </h1>
        <p className="text-center text-sm text-slate-400">
          The path you`&apos;`re trying to access doesn`&apos;`t exist. Please
          go back and try again
        </p>

        <Link
          href=".."
          className="rounded border border-slate-400 bg-slate-200 px-2 font-semibold text-slate-600"
        >
          Go Back
        </Link>
      </main>
    </>
  )
}

export default NotFoundView
