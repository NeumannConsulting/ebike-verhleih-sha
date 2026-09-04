/** Change contact details here; every call-to-action uses these values. */
export const siteConfig = {
  name: "E-Bike Verleih Schwäbisch Hall",
  url: "https://ebike-verleih-sha.de",
  phoneDisplay: "0791 95410119",
  phoneHref: "tel:+4979195410119",
  whatsappNumber: "4979195410119",
  whatsappMessage: "Hallo, ich möchte ein E-Bike in Schwäbisch Hall anfragen.",
  email: "info@ebox-bike.de",
  address: {
    street: "Aschenhausweg 19",
    postalCode: "74523",
    city: "Schwäbisch Hall",
  },
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
