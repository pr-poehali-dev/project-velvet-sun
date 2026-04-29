export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-serif text-3xl tracking-wide text-foreground mb-2">Анна &amp; Михаил</p>
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase">14 сентября 2025</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a href="#details" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Детали
          </a>
          <span className="hidden md:block text-muted-foreground/30">·</span>
          <a href="#program" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Программа
          </a>
          <span className="hidden md:block text-muted-foreground/30">·</span>
          <a href="#dresscode" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Дресс-код
          </a>
          <span className="hidden md:block text-muted-foreground/30">·</span>
          <a href="#rsvp" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            RSVP
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">С любовью ждём вас · 14.09.2025</p>
        </div>
      </div>
    </footer>
  )
}
