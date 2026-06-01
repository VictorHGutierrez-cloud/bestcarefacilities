/**
 * Commercial proposal constants (ROW USD, monthly).
 */

export const CLIENT = {
  organizationName: "Cliente Sem Nome",
  seatCount: 100,
  /** Nonprofit discount applied to licenses, recruitment, and implementation. */
  licenseDiscountPercent: 50,
} as const;

const D = CLIENT.licenseDiscountPercent / 100;

/** Starter Planning: Core + Time Tracking + Time Off + Shifts (Enterprise tier, monthly ROW USD). */
export const PRICING_ROW_USD = {
  bundleName: "Starter Planning Enterprise",
  listPricePerSeatPerMonth: 7.5,
  recruitment: {
    tier: "5 Active Jobs",
    /** ROW list price before nonprofit discount. */
    listPricePerMonth: 89,
  },
  implementation: {
    /** Reference list before nonprofit discount (for transparency). */
    listPriceOneTime: 500,
    /** Discounted one-time onboarding fee. */
    discountedOneTime: 250,
  },
} as const;

const licenseList = CLIENT.seatCount * PRICING_ROW_USD.listPricePerSeatPerMonth;
const licenseDiscounted = licenseList * (1 - D);

const recruitmentList = PRICING_ROW_USD.recruitment.listPricePerMonth;
const recruitmentDiscounted = recruitmentList * (1 - D);

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  recruitmentListPerMonth: recruitmentList,
  recruitmentDiscountedSubtotal: recruitmentDiscounted,
  monthlyTotal: licenseDiscounted + recruitmentDiscounted,
  implementationListOneTime: PRICING_ROW_USD.implementation.listPriceOneTime,
  implementationOneTime: PRICING_ROW_USD.implementation.discountedOneTime,
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: "Cliente Sem Nome — HR team",
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: PRICING_ROW_USD.listPricePerSeatPerMonth,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
