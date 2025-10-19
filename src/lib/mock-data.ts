// Mock data for demo deployment without external services

export interface MockUser {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  isFounder?: boolean
}

export interface MockBay {
  id: string
  name: string
  type: 'SIMULATOR' | 'PUTTING'
  isActive: boolean
}

export interface MockBooking {
  id: string
  userId: string
  bayId: string
  startTime: string
  endTime: string
  price: number
  finalPrice: number
  status: 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
  accessToken?: string
  qrCodeData?: string
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+33123456789',
    isFounder: false
  },
  {
    id: '2',
    email: 'sarah.martin@example.com',
    firstName: 'Sarah',
    lastName: 'Martin',
    phone: '+33987654321',
    isFounder: true
  },
  {
    id: '3',
    email: 'marcus.leblanc@example.com',
    firstName: 'Marcus',
    lastName: 'Leblanc',
    phone: '+33555666777',
    isFounder: true
  }
]

export const mockBays: MockBay[] = [
  { id: '1', name: 'Simulator Bay 1', type: 'SIMULATOR', isActive: true },
  { id: '2', name: 'Simulator Bay 2', type: 'SIMULATOR', isActive: true },
  { id: '3', name: 'Simulator Bay 3', type: 'SIMULATOR', isActive: true },
  { id: '4', name: 'Simulator Bay 4', type: 'SIMULATOR', isActive: true },
  { id: '5', name: 'Simulator Bay 5', type: 'SIMULATOR', isActive: true },
  { id: '6', name: 'Putting Bay', type: 'PUTTING', isActive: true }
]

export const mockBookings: MockBooking[] = [
  {
    id: '1',
    userId: '1',
    bayId: '1',
    startTime: '2024-01-15T14:00:00Z',
    endTime: '2024-01-15T15:00:00Z',
    price: 60,
    finalPrice: 60,
    status: 'COMPLETED',
    accessToken: 'demo-token-1',
    qrCodeData: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMjJjNTVlIi8+Cjx0ZXh0IHg9IjEyOCIgeT0iMTI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGVtbyBRUiBDb2RlPC90ZXh0Pgo8L3N2Zz4K'
  },
  {
    id: '2',
    userId: '2',
    bayId: '2',
    startTime: '2024-01-15T16:00:00Z',
    endTime: '2024-01-15T17:00:00Z',
    price: 60,
    finalPrice: 30,
    status: 'CONFIRMED',
    accessToken: 'demo-token-2'
  }
]

// Mock authentication state
export let mockCurrentUser: MockUser | null = null

export const mockAuth = {
  signIn: async (email: string, password: string) => {
    const user = mockUsers.find(u => u.email === email)
    if (user) {
      mockCurrentUser = user
      return { user, error: null }
    }
    return { user: null, error: { message: 'Invalid credentials' } }
  },
  
  signUp: async (email: string, password: string, userData: any) => {
    const newUser: MockUser = {
      id: (mockUsers.length + 1).toString(),
      email,
      firstName: userData.first_name || '',
      lastName: userData.last_name || '',
      phone: userData.phone || '',
      isFounder: false
    }
    mockUsers.push(newUser)
    mockCurrentUser = newUser
    return { user: newUser, error: null }
  },
  
  signOut: async () => {
    mockCurrentUser = null
    return { error: null }
  },
  
  getCurrentUser: () => mockCurrentUser
}

// Mock booking functions
export const mockBookingAPI = {
  createBooking: async (bookingData: any) => {
    const newBooking: MockBooking = {
      id: (mockBookings.length + 1).toString(),
      userId: bookingData.userId,
      bayId: bookingData.bayId,
      startTime: bookingData.startTime,
      endTime: bookingData.endTime,
      price: bookingData.price,
      finalPrice: bookingData.finalPrice,
      status: 'CONFIRMED',
      accessToken: `demo-token-${Date.now()}`
    }
    mockBookings.push(newBooking)
    return { success: true, booking: newBooking }
  },
  
  getBookings: async (filters?: any) => {
    return { success: true, bookings: mockBookings }
  },
  
  generateQRCode: async (bookingId: string) => {
    const booking = mockBookings.find(b => b.id === bookingId)
    if (booking) {
      booking.qrCodeData = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMjJjNTVlIi8+Cjx0ZXh0IHg9IjEyOCIgeT0iMTI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGVtbyBRUiBDb2RlPC90ZXh0Pgo8L3N2Zz4K'
      return { success: true, qrCode: booking.qrCodeData }
    }
    return { success: false, error: 'Booking not found' }
  }
}

// Mock Stripe functions
export const mockStripe = {
  createCheckoutSession: async (sessionData: any) => {
    // Simulate successful payment
    return {
      success: true,
      sessionId: `cs_demo_${Date.now()}`,
      url: `/booking-success?session_id=cs_demo_${Date.now()}`
    }
  }
}
