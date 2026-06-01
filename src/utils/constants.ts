/**
 * Commercial proposal constants — Best Care Facilities (ROW USD, monthly).
 */

export const CLIENT = {
  organizationName: "Best Care Facilities",
  seatCount: 100,
  listPricePerSeatPerMonth: 7,
} as const;

export const PRICING_ROW_USD = {
  bundleName: "Modular workforce platform",
  listPricePerSeatPerMonth: CLIENT.listPricePerSeatPerMonth,
  recruitment: {
    tier: "Optional — 5 Active Jobs (example)",
    listPricePerMonth: 89,
  },
  implementation: {
    listPriceOneTime: 700,
    discountedOneTime: 700,
  },
} as const;

const licenseList = CLIENT.seatCount * PRICING_ROW_USD.listPricePerSeatPerMonth;
const recruitmentList = PRICING_ROW_USD.recruitment.listPricePerMonth;

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseList,
  recruitmentListPerMonth: recruitmentList,
  recruitmentDiscountedSubtotal: recruitmentList,
  monthlyTotal: licenseList,
  implementationListOneTime: PRICING_ROW_USD.implementation.listPriceOneTime,
  implementationOneTime: PRICING_ROW_USD.implementation.discountedOneTime,
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: `${CLIENT.organizationName} — HR team`,
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: PRICING_ROW_USD.listPricePerSeatPerMonth,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
