"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  Users, 
  Euro, 
  Calendar, 
  TrendingUp, 
  Download,
  Eye,
  Clock,
  MapPin,
  QrCode
} from 'lucide-react'

interface DashboardStats {
  totalRevenue: number
  totalBookings: number
  activeUsers: number
  utilizationRate: number
  founderMembers: number
  averageBookingValue: number
}

interface RecentBooking {
  id: string
  user: string
  bay: string
  startTime: string
  endTime: string
  amount: number
  status: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalRevenue: 0,
    totalBookings: 0,
    activeUsers: 0,
    utilizationRate: 0,
    founderMembers: 0,
    averageBookingValue: 0
  })

  const [recentBookings, setRecentBookings] = useState<RecentBooking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setTimeout(() => {
      setStats({
        totalRevenue: 45680,
        totalBookings: 342,
        activeUsers: 156,
        utilizationRate: 78.5,
        founderMembers: 47,
        averageBookingValue: 45.20
      })

      setRecentBookings([
        {
          id: '1',
          user: 'Sarah M.',
          bay: 'Simulator Bay 2',
          startTime: '2024-01-15 14:00',
          endTime: '2024-01-15 15:00',
          amount: 60,
          status: 'completed'
        },
        {
          id: '2',
          user: 'Marcus L.',
          bay: 'Putting Bay',
          startTime: '2024-01-15 16:00',
          endTime: '2024-01-15 17:00',
          amount: 30,
          status: 'confirmed'
        },
        {
          id: '3',
          user: 'Elena K.',
          bay: 'Simulator Bay 1',
          startTime: '2024-01-15 18:00',
          endTime: '2024-01-15 19:00',
          amount: 30,
          status: 'confirmed'
        }
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-golf-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your golf facility operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <Euro className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBookings}</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">
                +5 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilization Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.utilizationRate}%</div>
              <p className="text-xs text-muted-foreground">
                +3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Founder Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.founderMembers}</div>
              <p className="text-xs text-muted-foreground">
                of 100 available
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Booking Value</CardTitle>
              <Euro className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats.averageBookingValue)}</div>
              <p className="text-xs text-muted-foreground">
                +2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Utilization Heatmap */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-golf-600" />
                Bay Utilization Heatmap
              </CardTitle>
              <CardDescription>
                Real-time utilization across all bays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Simulator Bay 1', utilization: 85 },
                  { name: 'Simulator Bay 2', utilization: 92 },
                  { name: 'Simulator Bay 3', utilization: 78 },
                  { name: 'Simulator Bay 4', utilization: 65 },
                  { name: 'Simulator Bay 5', utilization: 88 },
                  { name: 'Putting Bay', utilization: 45 }
                ].map((bay) => (
                  <div key={bay.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{bay.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            bay.utilization > 80 ? 'bg-green-500' :
                            bay.utilization > 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${bay.utilization}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {bay.utilization}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-golf-600" />
                Recent Bookings
              </CardTitle>
              <CardDescription>
                Latest booking activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-sm">{booking.user}</div>
                        <div className="text-xs text-gray-600">{booking.bay}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{formatCurrency(booking.amount)}</div>
                      <div className="text-xs text-gray-600">{formatDate(booking.startTime)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Bookings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Management Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-golf-600" />
                User Management
              </CardTitle>
              <CardDescription>
                Manage users and founder status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                View All Users
              </Button>
              <Button className="w-full" variant="outline">
                Founder Applications
              </Button>
              <Button className="w-full" variant="outline">
                User Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-golf-600" />
                Financial Reports
              </CardTitle>
              <CardDescription>
                Revenue and profit analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                P&L Summary
              </Button>
              <Button className="w-full" variant="outline">
                Revenue Analytics
              </Button>
              <Button className="w-full" variant="outline">
                Profit Share Report
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-golf-600" />
                Data Export
              </CardTitle>
              <CardDescription>
                Export data and reports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button className="w-full" variant="outline">
                Booking Reports
              </Button>
              <Button className="w-full" variant="outline">
                User Data Export
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
