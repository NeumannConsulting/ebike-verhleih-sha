import Link from "next/link";
import { siteConfig } from "./config";

export function ContactButtons({ dark = false }: { dark?: boolean }) {
  const phoneClass = dark
    ? "border-white/35 bg-white text-forest hover:bg-neutral-200"
    : "border-forest/25 bg-white text-forest hover:bg-sand";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a className="button bg-accent text-forest hover:bg-accent-light" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
        Per WhatsApp anfragen
      </a>
      <a className={`button border ${phoneClass}`} href={siteConfig.phoneHref}>
        Jetzt anrufen
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-forest/10 py-8 text-sm text-forest/70">
      <div className="shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <nav aria-label="Rechtliches" className="flex gap-5">
          <Link className="link" href="/impressum">Impressum</Link>
          <Link className="link" href="/datenschutz">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}

export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="border-b border-forest/10 py-5">
      <div className="shell flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-forest">E-Bike Verleih <span className="text-forest/55">SHA</span></Link>
        <a className="text-sm font-medium text-forest underline underline-offset-4" href={siteConfig.phoneHref}>Anrufen</a>
      </div>
      <div className="shell pt-16 pb-10 sm:pt-20 sm:pb-14">
        <p className="eyebrow">E-Bike Verleih Schwäbisch Hall</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-forest sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-forest/75">{intro}</p>
      </div>
    </header>
  );
}
