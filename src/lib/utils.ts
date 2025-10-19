import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

export function formatDateTime(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function addMinutes(date: Date, minutes: number): Date {
  const result = new Date(date)
  result.setMinutes(result.getMinutes() + minutes)
  return result
}

export function getTimeband(date: Date, month: number): 'PEAK' | 'NIGHT' | 'LOW_SEASON' {
  const hour = date.getHours()
  
  // Night time (22:00-06:00) year-round
  if (hour >= 22 || hour < 6) {
    return 'NIGHT'
  }
  
  // Low season midday (12:00-18:00, May-Sep)
  if (month >= 5 && month <= 9 && hour >= 12 && hour < 18) {
    return 'LOW_SEASON'
  }
  
  // Peak time (06:00-22:00, Oct-Apr)
  return 'PEAK'
}

export function generateAccessToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

export function isValidAccessWindow(bookingStart: Date, currentTime: Date): boolean {
  const tenMinutesBefore = addMinutes(bookingStart, -10)
  const tenMinutesAfter = addMinutes(bookingStart, 60) // 55min slot + 5min buffer
  
  return currentTime >= tenMinutesBefore && currentTime <= tenMinutesAfter
}

export function getBookingSlotTimes(startTime: Date): { start: Date; end: Date } {
  const start = new Date(startTime)
  const end = addMinutes(start, 55) // 55-minute slot
  
  return { start, end }
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear()
}

export function getDateRange(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = []
  const current = new Date(startDate)
  
  while (current <= endDate) {
    dates.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }
  
  return dates
}
