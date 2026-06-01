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
} as const;
