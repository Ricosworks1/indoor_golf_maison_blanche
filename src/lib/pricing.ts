import { getTimeband } from './utils'

export interface PriceRule {
  season: 'PEAK' | 'NIGHT' | 'LOW_SEASON'
  timeband: 'PEAK' | 'NIGHT' | 'LOW_SEASON'
  price: number
}

export const DEFAULT_PRICE_RULES: PriceRule[] = [
  // Peak: €60/hr (06:00–22:00, Oct–Apr)
  { season: 'PEAK', timeband: 'PEAK', price: 60 },
  
  // Night: €30/hr (22:00–06:00 year-round)
  { season: 'PEAK', timeband: 'NIGHT', price: 30 },
  { season: 'LOW_SEASON', timeband: 'NIGHT', price: 30 },
  
  // Low-season midday: €35/hr (12:00–18:00, May–Sep)
  { season: 'LOW_SEASON', timeband: 'LOW_SEASON', price: 35 },
  
  // Low-season peak: €60/hr (other times in May-Sep)
  { season: 'LOW_SEASON', timeband: 'PEAK', price: 60 },
]

export function getCurrentSeason(): 'PEAK' | 'LOW_SEASON' {
  const month = new Date().getMonth() + 1 // 1-12
  return (month >= 5 && month <= 9) ? 'LOW_SEASON' : 'PEAK'
}

export function calculatePrice(
  date: Date,
  isFounder: boolean = false,
  founderDiscountRate: number = 0.5
): number {
  const month = date.getMonth() + 1
  const season = (month >= 5 && month <= 9) ? 'LOW_SEASON' : 'PEAK'
  const timeband = getTimeband(date, month)
  
  const rule = DEFAULT_PRICE_RULES.find(
    r => r.season === season && r.timeband === timeband
  )
  
  if (!rule) {
    throw new Error(`No price rule found for season: ${season}, timeband: ${timeband}`)
  }
  
  let finalPrice = rule.price
  
  if (isFounder) {
    finalPrice = finalPrice * (1 - founderDiscountRate)
  }
  
  return Math.round(finalPrice * 100) / 100 // Round to 2 decimal places
}

export function getPriceBreakdown(
  date: Date,
  isFounder: boolean = false,
  founderDiscountRate: number = 0.5
): {
  basePrice: number
  discount: number
  finalPrice: number
  timeband: string
  season: string
} {
  const month = date.getMonth() + 1
  const season = (month >= 5 && month <= 9) ? 'LOW_SEASON' : 'PEAK'
  const timeband = getTimeband(date, month)
  
  const rule = DEFAULT_PRICE_RULES.find(
    r => r.season === season && r.timeband === timeband
  )
  
  if (!rule) {
    throw new Error(`No price rule found for season: ${season}, timeband: ${timeband}`)
  }
  
  const basePrice = rule.price
  const discount = isFounder ? basePrice * founderDiscountRate : 0
  const finalPrice = basePrice - discount
  
  return {
    basePrice,
    discount,
    finalPrice: Math.round(finalPrice * 100) / 100,
    timeband,
    season,
  }
}
