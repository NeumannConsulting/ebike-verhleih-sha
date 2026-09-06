import Image from "next/image";
import { ContactButtons, Footer } from "./components";
import { siteConfig } from "./config";

const bikes = [
  {
    name: "E-Fullys",
    description: "Vollgefedert für sportliche Touren.",
    image: "/images/e-fully.jpg",
    alt: "Beispiel eines E-Fullys auf einem Waldweg",
  },
  {
    name: "E-Mountainbikes",
    description: "Für sportliche Ausflüge auf abwechslungsreichen Strecken.",
    image: "/images/e-mountainbike.jpg",
    alt: "Beispiel eines E-Mountainbikes im Wald",
  },
  {
    name: "E-Tourenräder",
    description: "Komfortabel unterwegs auf längeren Radtouren.",
    image: "/images/e-tourenrad.jpg",
    alt: "Beispiel eines E-Tourenrads an einem Radweg",
  },
  {
    name: "Surron",
    description: "Modell, Mietpreis und Voraussetzungen direkt anfragen.",
    image: "/images/surron.jpg",
    alt: "Beispiel einer Surron Light Bee auf einem Waldweg",
  },
];

const steps = [
  ["01", "Anfragen", "Wunschtermin und gewünschte Fahrzeugart senden."],
  ["02", "Verfügbarkeit klären", "Zeitraum, Modell und passende Größe abstimmen."],
  ["03", "Details vereinbaren", "Abholung und letzte Details direkt besprechen."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    areaServed: "Schwäbisch Hall und Umgebung",
  };

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image src="/images/hero-v2.jpg" alt="" fill priority sizes="100vw" className="hero-photo object-cover" />
          </div>
          <div className="shell hero-content-wrap">
            <header className="flex items-center justify-between gap-4 py-5 text-white">
              <span className="font-semibold tracking-tight">E-Bike Verleih <span className="text-white/55">SHA</span></span>
              <a className="text-sm font-semibold text-accent underline underline-offset-4" href={siteConfig.phoneHref}>Anrufen</a>
            </header>
            <div className="hero-copy">
              <p className="eyebrow !text-accent">Schwäbisch Hall &amp; Umgebung</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl">
                <span>E-Bike mieten &amp;</span><br className="hidden sm:block" />
                <span> Schwäbisch Hall</span><br className="hidden sm:block" />
                <span> entdecken.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">Das passende E-Bike für Ihre nächste Tour. Einfach Ihren Wunschtermin anfragen und Verfügbarkeit klären.</p>
              <div className="mt-8"><ContactButtons dark /></div>
              <div className="mt-5 max-w-lg text-sm leading-6 text-white/60">
                <p>E-Bikes ab 50 € pro Tag.</p>
                <p className="mt-1">Bei mehrtägiger oder wochenweiser Miete sind individuelle Rabatte möglich.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="shell">
            <p className="eyebrow text-center">Unsere Auswahl</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">Was passt zu Ihrer nächsten Fahrt?</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {bikes.map((bike) => (
                <article key={bike.name} className="flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5">
                  <Image src={bike.image} alt={bike.alt} width={1400} height={1050} className="aspect-[4/3] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-semibold">{bike.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-forest/70">{bike.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-forest/70 [text-wrap:balance]">Die Bilder zeigen Beispielmodelle und Kategorien. Tatsächliche Verfügbarkeit klären wir persönlich per WhatsApp oder Telefon.</p>
            <div className="mt-7 flex justify-center"><ContactButtons /></div>
          </div>
        </section>

        <section className="border-y border-forest/10 bg-white py-16 sm:py-20">
          <div className="shell">
            <p className="eyebrow">So einfach geht’s</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">In drei Schritten zum E-Bike</h2>
            <ol className="mt-9 grid gap-5 sm:grid-cols-3">
              {steps.map(([number, title, text]) => (
                <li key={number} className="rounded-sm border border-neutral-200 bg-neutral-50 p-6">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-neutral-950">{number}</span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-forest/70">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="shell grid items-center gap-8 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            <div>
              <p className="eyebrow">E-Bike mieten vor Ort</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Mit E-Unterstützung durch Schwäbisch Hall und die Region</h2>
            </div>
            <p className="text-lg leading-8 text-forest/75">Ob entlang des Kochers, im Hohenloher Land oder für ein paar Tage im Alltag: Mit einem passenden E-Bike sind Sie in und um Schwäbisch Hall flexibel unterwegs.</p>
          </div>
        </section>

        <section className="cta-section text-white">
          <div className="cta-media" aria-hidden="true">
            <Image src="/images/contact-cta-v2.jpg" alt="" fill sizes="100vw" className="cta-photo object-cover" />
          </div>
          <div className="shell cta-content-wrap">
            <div className="cta-copy">
            <p className="eyebrow !text-accent">Direkt anfragen</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Bereit für Ihre nächste Tour?</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/80">Senden Sie uns Ihren Wunschtermin, die Mietdauer und die gewünschte Fahrzeugart. Wir klären die Verfügbarkeit persönlich mit Ihnen.</p>
            <div className="mt-8"><ContactButtons dark /></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
