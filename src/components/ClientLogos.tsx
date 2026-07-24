import logoKemenag from '../assets/logo KEMENAG.png'
import logoKemendikbud from '../assets/logo KEMENDIKBUD.png'
import logoBPJPH from '../assets/logo BPJPH.png'
import logoOjk from '../assets/logo OJK.png'
import logoTOTO from '../assets/logo TOTO.png'
import logoPUPR from '../assets/logo PUPR.png'

const clients = [
  { name: 'Kementerian Agama', logo: logoKemenag },
  { name: 'Kemendikbud', logo: logoKemendikbud },
  { name: 'BPJPH', logo: logoBPJPH },
  { name: 'OJK', logo: logoOjk },
  { name: 'TOTO', logo: logoTOTO },
  { name: 'PUPR', logo: logoPUPR },
]

export function ClientLogos() {
  const doubled = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="bg-cream py-35 overflow-hidden">
      <div className="flex flex-col items-center gap-20">
        {/* Our Client */}
        <div className="border border-navy-deep px-5 py-2 bg-cream">
          <h2 className="text-navy text-2xl font-display font-semibold tracking-wide uppercase">
            Our Client
          </h2>
        </div>

        {/* Running Logo */}
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee w-max gap-[50px] px-10 items-center">
            {doubled.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex shrink-0 items-center justify-center h-[120px]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos