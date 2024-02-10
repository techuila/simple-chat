type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  const currentYear = new Date().getFullYear()
  const appTitle = 'Simple Chat'

  return (
    <div className="h-full bg-neutral-50">
      <div className="flex flex-col h-full">
        <header className="bg-primary-500">
          <div className="container mx-auto py-4 text-center">
            <h1 className="text-2xl font-bold">{appTitle}</h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="h-full container mx-auto py-4">{children}</div>
        </main>
        <footer>
          <div className="container mx-auto py-4">
            <p className="text-center">
              &copy; {currentYear} {appTitle}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
