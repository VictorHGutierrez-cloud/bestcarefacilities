/**
 * Bestcare Facilities Management — proposal numbers & company profile.
 * Company facts sourced from public positioning (aboutbestcare / bestcareservices.co.ke).
 */

export const DEFAULT_VALUES = {
  empresa: "Bestcare Facilities Management",
  legalName: "Bestcare Facilities Management",
  tagline: "Integrated. Facility. Management.",
  location: "Nairobi & Kenya",
  headquarters: "Mpaka Plaza, Westlands, Nairobi",

  /** Company scale (public profile) */
  yearsExperience: "15+",
  monthlyClients: "1,500+",
  professionalsNetwork: "2,000+",
  professionalsCount: 2000,
  branches: 25,
  googleRating: "4.8",
  reviewCount: 113,

  /** Discovery call — Florence (HR) & team */
  clientQuote:
    "We're growing — we need a functional, efficient system. Factorial can bridge this gap.",
  clientQuoteAttribution: "Florence — HR, Best Care",
  servicesNamedInCall:
    "cleaning, fumigation, landscaping, pest control, security, HVAC, electrical, plumbing, and building maintenance",

  /** Factorial proposal scope (discovery session) */
  partner: "Talent Grid Africa",
  totalColaboradores: 100,
  custoColaboradorMes_USD: 7,
  mensalFactorial_USD: 700,
  implantacaoFactorial_USD: 700,
  onboardingDias: "30–45",
  // estimativa — refine with client Finance
  horasRHManualMes: 48,
  custoHoraRH_USD: 15,
  custoManualMensal_USD: 720,
  custoManualAnual_USD: 8640,

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Business Development · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl:
    "https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=125471&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in",
  demoEmail: "hellen@demo2e774c9b.com",
  demoPassword: "Papapapa333!",
  closingVideoId: "9mUIcLa2te8",

  servicePillars: ["Hard FM", "Soft FM", "Integrated FM"] as const,
  coreServices:
    "professional cleaning, fumigation, landscaping, pest control, appliance repair, security, HVAC, electrical, plumbing, and building maintenance",
  sectorsServed:
    "residential, offices, hospitality, healthcare, retail, education, and industrial sites",
} as const;
