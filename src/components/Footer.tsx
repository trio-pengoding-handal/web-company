import { Logo } from './Logo'

const companyLinks = ['Tentang Kami', 'Proyek', 'Karier', 'Berita']

export function Footer() {
  return (
    <footer id="kontak" className="bg-navy text-white pt-[74px] pb-0">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-[15px]">
            <Logo />
            <p className="text-white/55 text-sm leading-6 max-w-[280px]">
              Gelora Corporation — perusahaan induk yang berfokus pada
              pengembangan properti dan konstruksi berkelanjutan di seluruh
              Indonesia.
            </p>
          </div>

          <div>
            <h5 className="text-label text-sm uppercase tracking-wider mb-5">
              Perusahaan
            </h5>
            <ul className="flex flex-col gap-[13px]">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/68 text-[15px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-label text-sm uppercase tracking-wider mb-5">
              Kontak
            </h5>
            <ul className="flex flex-col gap-[13px]">
              <li>
                <p className="text-label text-sm">Telepon</p>
                <a
                  href="tel:+6281117171808"
                  className="text-white/68 text-[15px] hover:text-white transition-colors"
                >
                  +62 811-1717-1808
                </a>
              </li>
              <li>
                <p className="text-label text-sm">Email</p>
                <a
                  href="mailto:info@gcorporation.co.id"
                  className="text-white/68 text-[15px] hover:text-white transition-colors"
                >
                  info@gcorporation.co.id
                </a>
              </li>
              <li>
                <p className="text-label text-sm">Alamat</p>
                <p className="text-white/68 text-[15px]">
                  Tengerang Selatan, Indonesia
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-7 text-white/40 text-sm">
          <p>© 2026 PT G Corporation. Seluruh hak cipta dilindungi.</p>
          <p>Kebijakan Privasi · Syarat & Ketentuan</p>
        </div>
      </div>
    </footer>
  )
}
