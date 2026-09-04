import Image from "next/image";
import { ContactButtons, Footer } from "./components";
import { siteConfig } from "./config";

const bikes = [
  { name: "E-Fullys", image: "/images/e-fully.jpg", alt: "Beispiel eines E-Fullys auf einem Waldweg" },
  { name: "E-Mountainbikes", image: "/images/e-mountainbike.jpg", alt: "Beispiel eines E-Mountainbikes im Wald" },
  { name: "E-Tourenräder", image: "/images/e-tourenrad.jpg", alt: "Beispiel eines E-Tourenrads an einem Radweg" },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, postalCode: siteConfig.address.postalCode, addressLocality: siteConfig.address.city, addressCountry: "DE" },
    areaServed: "Schwäbisch Hall und Umgebung",
  };

  return (
    <>
      <main>
        <section className="bg-neutral-900 py-5 text-white">
          <div className="shell flex items-center justify-between gap-4">
            <span className="font-semibold tracking-tight">E-Bike Verleih <span className="text-white/55">SHA</span></span>
            <a className="text-sm font-semibold text-accent underline underline-offset-4" href={siteConfig.phoneHref}>Anrufen</a>
          </div>
        </section>
        <section className="bg-neutral-900 pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
          <div className="shell">
            <p className="eyebrow !text-accent">Schwäbisch Hall & Umgebung</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">E-Bike Verleih in Schwäbisch Hall</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">E-Bikes unkompliziert mieten – für Touren, Alltag und Freizeit. Fragen Sie die aktuelle Verfügbarkeit einfach direkt an.</p>
            <div className="mt-9"><ContactButtons dark /></div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="shell">
            <p className="eyebrow">Fahrradarten</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Das passende E-Bike für Ihre Tour</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {bikes.map((bike) => <article key={bike.name} className="overflow-hidden rounded-sm bg-white shadow-sm">
                <Image src={bike.image} alt={bike.alt} width={1448} height={1086} className="aspect-[4/3] w-full object-cover" />
                <h3 className="p-5 text-xl font-semibold">{bike.name}</h3>
              </article>)}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-forest/70">Die Bilder zeigen Beispielmodelle und Kategorien. Welche Modelle und Rahmengrößen aktuell verfügbar sind, klären wir persönlich per WhatsApp oder Telefon.</p>
            <div className="mt-7"><ContactButtons /></div>
          </div>
        </section>

        <section className="border-y border-forest/10 bg-white py-16 sm:py-20">
          <div className="shell">
            <p className="eyebrow">So einfach geht’s</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">In drei Schritten zum E-Bike</h2>
            <ol className="mt-9 grid gap-5 sm:grid-cols-3">
              {[['01', 'Anfragen', 'Senden Sie uns eine Nachricht oder rufen Sie uns an.'], ['02', 'Verfügbarkeit abstimmen', 'Wir klären Zeitraum, Modell und passende Größe.'], ['03', 'Details vereinbaren', 'Abholung und alle weiteren Details stimmen wir direkt mit Ihnen ab.']].map(([number, title, text]) => <li key={number} className="rounded-sm border border-neutral-200 bg-neutral-50 p-6"><span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-neutral-950">{number}</span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-forest/70">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="shell grid items-center gap-8 lg:grid-cols-[1fr_.9fr] lg:gap-20">
            <div><p className="eyebrow">E-Bike mieten vor Ort</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Mit E-Unterstützung durch Schwäbisch Hall und die Region</h2></div>
            <p className="text-lg leading-8 text-forest/75">Ob eine entspannte Tour entlang des Kochers, ein Ausflug ins Hohenloher Land oder ein praktisches E-Bike für ein paar Tage: In Schwäbisch Hall finden Sie passende Möglichkeiten für unterwegs. Da sich Verfügbarkeit und Größen laufend ändern können, erhalten Sie die verlässliche Auskunft direkt im persönlichen Kontakt.</p>
          </div>
        </section>

        <section className="bg-neutral-900 py-16 text-white sm:py-20">
          <div className="shell"><p className="eyebrow !text-accent">Direkt anfragen</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Welche E-Bikes sind zu Ihrem Wunschtermin frei?</h2><p className="mt-4 max-w-xl leading-7 text-white/75">Wir helfen Ihnen persönlich bei Verfügbarkeit, Modell und Größe weiter.</p><div className="mt-8"><ContactButtons dark /></div></div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
