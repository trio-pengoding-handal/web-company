import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const clients = [
  { name: 'Kementerian Agama', logo: 'logo KEMENAG.png' },
  { name: 'Kemendikbud', logo: 'logo KEMENDIKBUD.png' },
  { name: 'BPJPH', logo: 'logo BPJPH.png' },
  { name: 'OJK', logo: 'logo OJK.png' },
  { name: 'TOTO', logo: 'logo TOTO.png', wide: true },
  { name: 'PUPR', logo: 'logo PUPR.png' },
  { name: 'Heymale', logo: 'logo Heymale.png', wide: true },
  { name: 'Heylocal', logo: 'logo Heylocal.png' },
]

export function ClientLogos() {
  return (
    <section className="bg-cream py-35 overflow-hidden">
      <div className="flex flex-col items-center gap-20">
        {/* Our Client */}
        <div className="border border-navy-deep px-5 py-2 bg-cream">
          <h2 className="text-navy text-2xl font-display font-semibold tracking-wide uppercase">
            Our Client
          </h2>
        </div>

        {/* Running Logo pakai Swiper */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={50}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}  
            allowTouchMove={true}
            speed={100}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="w-full"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="!w-auto flex items-center">
                <div
                  className={`flex shrink-0 items-center justify-center h-[120px] overflow-hidden ${client.wide ? 'max-w-[160px]' : 'max-w-[120px]'}`}
                >
                  <img
                    src={`${window.location.href}/${client.logo}`}
                    alt={client.name}
                    className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos