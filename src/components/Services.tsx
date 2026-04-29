import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const items = [
  {
    title: "Церемония",
    description: "Торжественная регистрация в Белом зале усадьбы. Выездная церемония в парке с живой музыкой и лепестками роз.",
    iconName: "Heart",
  },
  {
    title: "Банкет",
    description: "Ужин при свечах в исторических интерьерах усадьбы. Авторское меню от шеф-повара, живая джазовая музыка.",
    iconName: "UtensilsCrossed",
  },
  {
    title: "Танцевальный вечер",
    description: "После ужина — танцевальная программа под лучшие хиты. Живой DJ и специальный первый танец молодожёнов.",
    iconName: "Music",
  },
  {
    title: "Фотосессия",
    description: "Прогулка по парку усадьбы и фотосессия на закате. Профессиональный фотограф запечатлеет каждый момент.",
    iconName: "Camera",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="program" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Программа дня
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            День, который
            <span className="italic"> запомнится</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                <Icon name={item.iconName} size={32} fallback="Star" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
