import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
    alt: 'Construction site panorama',
  },
  {
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    alt: 'Modern city skyline',
  },
  {
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80',
    alt: 'Architectural blueprint',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="beranda"
      className="relative mt-[75px] h-[min(881px,90vh)] overflow-hidden bg-navy"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(18,21,26,0.45) 0%, rgba(14,16,20,0.72) 55%, rgba(18,21,26,1) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-10 h-full flex items-center">
        <div className="flex items-start gap-8 max-w-[720px]">
          <div className="hidden sm:block w-1 h-[120px] bg-white shrink-0 mt-2" />
          <h1 className="font-display text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-semibold tracking-tight">
            Untuk Masa Depan Bangsa yang Cerah
          </h1>
        </div>
      </div>
    </section>
  )
}
