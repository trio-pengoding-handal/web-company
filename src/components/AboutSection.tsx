import { OutlineButton } from './OutlineButton'

function SitePlanIllustration() {
  return (
    <div className="relative w-full aspect-[546/448] rounded-sm overflow-hidden">
      <svg
        viewBox="0 0 546 448.5"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect width="546" height="448.5" fill="#12151A" rx="2" />
        <text
          x="146"
          y="68"
          fill="#9AA3AD"
          fontSize="11"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.08em"
        >
          SITE PLAN — BLOK A
        </text>
        <g stroke="#C79A5C" strokeWidth="1.27" fill="none">
          <rect x="126.75" y="87.75" width="292.5" height="312" />
          {[136.5, 185.25, 234, 282.75, 331.5].map((y) => (
            <line key={y} x1="126.75" y1={y} x2="419.25" y2={y} />
          ))}
          {[175.5, 224.25, 273, 321.75, 370.5].map((x) => (
            <line key={x} x1={x} y1="87.75" x2={x} y2="399.75" />
          ))}
        </g>
        <rect
          x="270"
          y="240.8"
          width="5.85"
          height="5.85"
          fill="#C79A5C"
        />
      </svg>

      <blockquote className="absolute -left-6 bottom-0 max-w-[230px] bg-navy-deep border border-gold px-7 py-5 text-white text-sm leading-relaxed">
        &ldquo;Setiap struktur adalah janji jangka panjang kepada kota yang
        menaunginya.&rdquo;
      </blockquote>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="tentang" className="bg-cream py-[110px]">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="flex flex-col gap-[15px]">
            <p className="text-gold text-sm uppercase tracking-widest font-medium">
              Profil Perusahaan
            </p>
            <h2 className="font-display text-navy text-[clamp(2rem,3.5vw,2.75rem)] leading-tight font-semibold">
              Mengenal Lebih Dekat Gelora Corporation
            </h2>
            <p className="text-body text-base leading-7 mt-2">
              PT G Corporation adalah perusahaan induk terkemuka yang berfokus
              pada pengembangan dan konstruksi properti. Kami mengutamakan
              inovasi, integritas struktural, dan arsitektur berkelanjutan di
              setiap proyek yang kami kerjakan.
            </p>
            <p className="text-body text-base leading-7">
              Dengan pendekatan yang menyatukan keahlian rekayasa mutakhir dan
              estetika kontekstual, kami menghadirkan karya yang melampaui
              ekspektasi klien — memperkuat elemen kota tempat karya kami
              berdiri.
            </p>
            <div className="mt-4">
              <OutlineButton href="#tentang">Tentang Kami</OutlineButton>
            </div>
          </div>

          <SitePlanIllustration />
        </div>
      </div>
    </section>
  )
}
