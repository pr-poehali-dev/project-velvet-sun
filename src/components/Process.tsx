import { useEffect, useRef, useState } from "react"

const schedule = [
  {
    time: "14:00",
    title: "Сбор гостей",
    description: "Встреча гостей у парадного входа усадьбы. Приветственные напитки и лёгкие закуски в летней галерее.",
  },
  {
    time: "15:00",
    title: "Церемония",
    description: "Торжественная регистрация брака в Белом зале. Выход молодожёнов под живую музыку.",
  },
  {
    time: "16:00",
    title: "Прогулка и фото",
    description: "Фотосессия в парке усадьбы. Гости наслаждаются коктейльной частью на террасе.",
  },
  {
    time: "17:30",
    title: "Торжественный ужин",
    description: "Банкет в Большом зале. Авторское меню, тосты и живая музыка весь вечер.",
  },
  {
    time: "20:00",
    title: "Танцевальная программа",
    description: "Первый танец молодожёнов. Вечеринка с DJ до полуночи.",
  },
  {
    time: "00:00",
    title: "Трансфер домой",
    description: "Организованный трансфер до метро Тушинская для всех гостей.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} id="schedule" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Расписание
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                14 сентября
                <span className="italic"> 2025</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Каждый момент этого дня наполнен смыслом. Мы продумали всё, чтобы вы просто наслаждались праздником.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {schedule.map((item, index) => (
                <div
                  key={item.time}
                  className={`group py-10 lg:py-12 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-2xl lg:text-3xl text-stone/60 group-hover:text-sage transition-colors duration-500 w-20 flex-shrink-0 pt-1">
                      {item.time}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
