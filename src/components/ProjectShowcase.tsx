import { useState } from 'react'

const projects = [
  {
    title:
      'Delta Residence — hunian modern yang menyatu dengan lanskap alami.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    cta: 'Detail',
  },
  {
    title: 'Skyline Tower — ikon vertikal di jantung metropolitan.',
    image:
      'https://images.unsplash.com/photo-1486718448742-163663a5830e?w=1920&q=80',
    cta: 'Detail',
  },
  {
    title: 'Green Campus — ruang belajar berkelanjutan untuk generasi baru.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
    cta: 'Detail',
  },
]

export function ProjectShowcase() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  const prev = () =>
    setActive((current) => (current - 1 + projects.length) % projects.length)
  const next = () => setActive((current) => (current + 1) % projects.length)

  return (
    <section id="proyek" className="relative h-[550px] overflow-hidden bg-black">
      <img
        key={project.image}
        src={project.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-10 h-full flex flex-col justify-end pb-[87px]">
        <h3 className="max-w-[560px] text-white font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-snug font-semibold mb-14 pl-10">
          {project.title}
        </h3>

        <div className="flex items-center justify-between pl-10">
          <button
            type="button"
            className="border-[3px] border-white/35 text-white px-5 py-3 text-sm rounded-sm hover:bg-white/10 transition-colors"
          >
            {project.cta}
          </button>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ke proyek ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-[7px] rounded-full transition-all ${
                    index === active
                      ? 'w-[22px] bg-gold-light'
                      : 'w-[7px] bg-white/35'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Proyek sebelumnya"
              onClick={prev}
              className="size-[38px] rounded-full border border-white/35 bg-white/6 text-white hover:bg-white/15 transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Proyek berikutnya"
              onClick={next}
              className="size-[38px] rounded-full border border-white/35 bg-white/6 text-white hover:bg-white/15 transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
