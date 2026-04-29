import { useEffect, useRef, useState } from "react"

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="dresscode" className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">Дресс-код</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground mb-2">
            Пудровый и кремовый
          </h2>
          <p className="font-serif text-lg italic text-primary-foreground/80">Dusty Rose · Ivory · Champagne</p>
        </div>

        <blockquote
          className={`font-serif text-2xl md:text-3xl font-light text-primary-foreground leading-relaxed mb-12 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Мы мечтаем о нежной, воздушной атмосфере. Просим гостей придерживаться пудровых, кремовых и бежевых оттенков — и избегать белого цвета.
        </blockquote>

        <div
          className={`grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { color: "bg-[#F2D4CC]", label: "Пудровый розовый" },
            { color: "bg-[#FAF0E6]", label: "Слоновая кость" },
            { color: "bg-[#F5E6C8]", label: "Шампань" },
          ].map((swatch) => (
            <div key={swatch.label} className="flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-full ${swatch.color} border border-primary-foreground/20`} />
              <p className="text-sm text-primary-foreground/80 tracking-wide">{swatch.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
