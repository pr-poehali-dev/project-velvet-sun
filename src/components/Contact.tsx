import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    dietary: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="rsvp" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              RSVP
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Будете
              <span className="italic"> с нами?</span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Просим подтвердить ваше участие до 1 сентября 2025 года. Это поможет нам подготовить всё на высшем уровне.
            </p>

            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">По всем вопросам</p>
                <a href="tel:+79001234567" className="text-foreground hover:text-sage transition-colors font-serif text-lg">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Организатор</p>
                <p className="text-foreground">Елена · свадебный координатор</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <p className="font-serif text-4xl text-sage mb-4">♡</p>
                <h3 className="font-serif text-2xl text-foreground mb-3">Спасибо!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы получили ваш ответ и с нетерпением ждём встречи с вами.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Имя Фамилия"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Присутствие
                  </label>
                  <div className="flex gap-8">
                    {[
                      { value: "yes", label: "Буду" },
                      { value: "no", label: "Не смогу" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value={opt.value}
                          checked={formState.attending === opt.value}
                          onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                          className="w-4 h-4 accent-sage"
                        />
                        <span className="text-foreground group-hover:text-sage transition-colors">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Количество гостей
                  </label>
                  <select
                    id="guests"
                    value={formState.guests}
                    onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-sage focus:outline-none transition-colors"
                  >
                    {["1", "2"].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="dietary" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Пищевые предпочтения
                  </label>
                  <input
                    type="text"
                    id="dietary"
                    value={formState.dietary}
                    onChange={(e) => setFormState({ ...formState, dietary: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                    placeholder="Вегетарианское, аллергии..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  Подтвердить
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
