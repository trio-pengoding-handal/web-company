const features = [
  {
    number: '01',
    title: 'Kualitas',
    description:
      'Setiap tahap konstruksi diawasi ketat, dari pondasi hingga detail akhir, memastikan standar mutu tertinggi pada setiap serah terima.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="44" height="44" stroke="#A9793C" strokeWidth="1.2" />
        <path
          d="M13 15h21v16H13V15z"
          stroke="#0E2A47"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Komitmen',
    description:
      'Kami memegang teguh jadwal dan anggaran yang disepakati, membangun kepercayaan melalui konsistensi di setiap proyek.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="44" height="44" stroke="#A9793C" strokeWidth="1.2" />
        <circle cx="23" cy="23" r="10" stroke="#0E2A47" strokeWidth="1.6" fill="none" />
        <path d="M23 17v6l4 2" stroke="#0E2A47" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Inovasi',
    description:
      'Kami mengadopsi metode konstruksi dan material terbaru untuk menghadirkan bangunan yang efisien serta berkelanjutan.',
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="44" height="44" stroke="#A9793C" strokeWidth="1.2" />
        <path
          d="M23 12l3 8h8l-6.5 5 2.5 8L23 28l-7 5 2.5-8L12 20h8l3-8z"
          stroke="#0E2A47"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-cream-warm py-[120px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex flex-col gap-16">
          <h2 className="font-display text-navy text-[clamp(2rem,3.5vw,2.75rem)] leading-tight font-semibold text-center max-w-[560px] mx-auto">
            Why ChooseUs Gelora Corporation
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-navy/8 p-px">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="bg-cream-warm px-10 py-11 flex flex-col gap-3"
              >
                <span className="text-gold text-sm font-medium">
                  {feature.number}
                </span>
                {feature.icon}
                <h4 className="text-navy text-xl font-semibold mt-2">
                  {feature.title}
                </h4>
                <p className="text-body-muted text-[15px] leading-7">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
