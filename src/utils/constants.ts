/**
 * Best Care Facilities — proposal numbers (single source of truth).
 */

export const DEFAULT_VALUES = {
  empresa: "Best Care Facilities",
  legalName: "Best Care Facility Services",
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
} as const;
