export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
          Built with Next.js, TypeScript, and Tailwind CSS. Designed with passion for clean code and great UX.
        </p>
        <p className="text-xs text-muted-foreground mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
