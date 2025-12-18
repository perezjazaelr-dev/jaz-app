export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
        </p>
        <p className="text-xs text-muted-foreground mt-2">&copy; {new Date().getFullYear()} perezjazaelr.</p>
      </div>
    </footer>
  )
}
