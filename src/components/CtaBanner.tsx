import { OutlineButton } from './OutlineButton'

export function CtaBanner() {
  return (
    <section className="relative bg-navy-deep py-[90px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)',
        }}
      />

      <div className="relative max-w-[640px] mx-auto px-10 text-center flex flex-col items-center gap-[15px]">
        <p className="text-gold text-sm uppercase tracking-widest font-medium">
          Mari Berkolaborasi
        </p>
        <h2 className="font-display text-white text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight">
          Siap Mewujudkan Visi Anda?
        </h2>
        <p className="text-white/68 text-base leading-7 max-w-[602px]">
          Bermitralah dengan tim arsitek dan insinyur kami untuk mengubah konsep
          menjadi ruang yang membentuk masa depan kota Anda.
        </p>
        <div className="pt-6">
          <OutlineButton variant="light" href="#kontak">
            Contact Us
          </OutlineButton>
        </div>
      </div>
    </section>
  )
}
