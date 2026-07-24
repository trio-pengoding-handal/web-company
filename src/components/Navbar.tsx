import { Logo } from './Logo'

const navLinks = [
  { label: 'Beranda', href: '#beranda', active: true },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Karier', href: '#karier' },
  { label: 'Berita', href: '#berita' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/92 backdrop-blur-md border-b border-white/8">
      <div className="max-w-[1200px] mx-auto px-10 h-[75px] flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[15px] py-1 transition-colors ${
                link.active
                  ? 'text-white'
                  : 'text-white/78 hover:text-white'
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-light" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
