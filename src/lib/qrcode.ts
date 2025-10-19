import QRCode from 'qrcode'

export interface QRCodeData {
  bookingId: string
  accessToken: string
  startTime: string
  endTime: string
  bayName: string
  timestamp: number
}

export async function generateQRCode(data: QRCodeData): Promise<string> {
  const qrData = {
    bookingId: data.bookingId,
    accessToken: data.accessToken,
    startTime: data.startTime,
    endTime: data.endTime,
    bayName: data.bayName,
    timestamp: data.timestamp,
  }
  
  try {
    const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify(qrData), {
      width: 256,
      margin: 2,
      color: {
        dark: '#22c55e', // Golf green
        light: '#ffffff',
      },
    })
    
    return qrCodeDataURL
  } catch (error) {
    console.error('Error generating QR code:', error)
    throw new Error('Failed to generate QR code')
  }
}

export function parseQRCodeData(qrData: string): QRCodeData | null {
  try {
    const parsed = JSON.parse(qrData)
    
    // Validate required fields
    if (!parsed.bookingId || !parsed.accessToken || !parsed.startTime || !parsed.endTime || !parsed.bayName) {
      return null
    }
    
    return parsed as QRCodeData
  } catch (error) {
    console.error('Error parsing QR code data:', error)
    return null
  }
}

export function isQRCodeValid(qrData: QRCodeData, currentTime: Date): boolean {
  const startTime = new Date(qrData.startTime)
  const endTime = new Date(qrData.endTime)
  
  // Check if current time is within the valid window (10 min before to 10 min after)
  const validStart = new Date(startTime.getTime() - 10 * 60 * 1000) // 10 minutes before
  const validEnd = new Date(endTime.getTime() + 10 * 60 * 1000) // 10 minutes after
  
  return currentTime >= validStart && currentTime <= validEnd
}
