import { Footer, PageHeader } from "../components";
import { siteConfig } from "../config";

export const metadata = { title: "Impressum", alternates: { canonical: "/impressum" } };

export default function Impressum() {
  return <><main><PageHeader title="Impressum" intro="Angaben gemäß § 5 TMG." /><section className="shell max-w-3xl py-12 leading-7 text-forest/80 sm:py-16"><h2 className="text-2xl font-semibold text-forest">Angaben zum Anbieter</h2><p className="mt-4">eBOX GmbH<br />Kompetenz in eBikes<br />{siteConfig.address.street}<br />{siteConfig.address.postalCode} {siteConfig.address.city}</p><h2 className="mt-10 text-2xl font-semibold text-forest">Vertreten durch</h2><p className="mt-4">Michael Schoch</p><h2 className="mt-10 text-2xl font-semibold text-forest">Kontakt</h2><p className="mt-4">Telefon: <a className="link" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><br />E-Mail: <a className="link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><h2 className="mt-10 text-2xl font-semibold text-forest">Registereintrag</h2><p className="mt-4">Registergericht: Amtsgericht Stuttgart<br />Registernummer: HRB 787552</p><h2 className="mt-10 text-2xl font-semibold text-forest">Umsatzsteuer-ID</h2><p className="mt-4">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE357833304</p></section></main><Footer /></>;
}
