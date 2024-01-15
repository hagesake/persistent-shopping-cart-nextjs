const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="container mx-auto">
        {children}
        <footer className="container fixed bottom-0">
          <div className="bg-slate-400 p-4">
            <h2>This is the root layout</h2>
          </div>
        </footer>
      </main>
    </>
  )
}

export default StoreLayout
