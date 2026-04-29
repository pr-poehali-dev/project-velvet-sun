import { useEffect, useRef, useState } from "react"

export function Philosophy() {
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
    <section ref={sectionRef} id="details" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="https://cdn.poehali.dev/projects/fe665be6-7fa4-455a-8f60-62ca8b8e17e5/files/763bddfc-94e1-45be-a378-44ca4ce8a482.jpg"
              alt="Усадьба Архангельское"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Место и время</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-10 text-balance">
              Усадьба
              <span className="italic block">Архангельское</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-px h-12 bg-sage mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Дата и время</p>
                  <p className="font-serif text-xl text-foreground">14 сентября 2025</p>
                  <p className="text-muted-foreground mt-1">Церемония в 15:00 · Банкет с 17:00</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-px h-12 bg-sage mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Адрес</p>
                  <p className="font-serif text-xl text-foreground">Московская область</p>
                  <p className="text-muted-foreground mt-1">Красногорский район, пос. Архангельское</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-px h-12 bg-sage mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Трансфер</p>
                  <p className="font-serif text-xl text-foreground">Организован</p>
                  <p className="text-muted-foreground mt-1">Отправление от метро Тушинская в 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}