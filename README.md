# Maison Blanche Indoor Golf

A premium 24/7 automated golf booking platform built with Next.js 14, TypeScript, Tailwind CSS, Supabase, and Stripe.

## 🏌️ Overview

Maison Blanche Indoor Golf is a sophisticated booking system for an automated indoor golf facility featuring:

- **5 Simulator Bays + 1 Putting Bay** - State-of-the-art golf simulators
- **24/7 Automated Access** - No staff required, QR code entry system
- **Dynamic Pricing** - Peak/Night/Low-season rates with founder discounts
- **Founder Program** - Lifetime benefits with 50% discount and profit sharing
- **Premium UX** - Elegant, European design with mobile-first approach

## 🚀 Features

### Core Functionality
- ✅ Real-time booking system with availability checking
- ✅ Dynamic pricing based on time and season
- ✅ QR code generation for facility access
- ✅ Stripe payment integration (one-time & recurring)
- ✅ Founder membership with lifetime benefits
- ✅ Admin dashboard with analytics
- ✅ Automated access logging and security

### Business Logic
- **Peak Hours**: €60/hr (06:00–22:00, Oct–Apr)
- **Night Hours**: €30/hr (22:00–06:00 year-round)
- **Low Season**: €35/hr (12:00–18:00, May–Sep)
- **Founder Benefits**: 50% lifetime discount, 2 years free membership, profit sharing

### Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Supabase for database and auth
- Stripe for payments
- Prisma ORM
- QR code generation
- Responsive design

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **UI Components**: Radix UI, Lucide React
- **QR Codes**: QRCode library
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── api/               # API routes
│   │   ├── admin/             # Admin dashboard
│   │   ├── book/              # Booking system
│   │   ├── contact/           # Contact page
│   │   ├── faqs/              # FAQ page
│   │   ├── founders-offer/    # Founder program
│   │   ├── membership/        # Membership plans
│   │   ├── pricing/           # Pricing page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── ui/               # UI components
│   │   └── providers.tsx     # Context providers
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
│       ├── prisma.ts         # Database client
│       ├── supabase.ts       # Supabase client
│       ├── stripe.ts         # Stripe client
│       ├── pricing.ts        # Pricing logic
│       ├── qrcode.ts         # QR code utilities
│       └── utils.ts          # General utilities
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.ts              # Database seeding
├── public/                   # Static assets
└── README.md
```

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main models:

- **User** - User accounts and profiles
- **FounderStatus** - Founder membership details
- **Bay** - Golf simulator and putting bays
- **Slot** - Available time slots with pricing
- **Booking** - User bookings with access tokens
- **PriceRule** - Dynamic pricing configuration
- **CreditLedger** - User credits and transactions
- **ProfitShare** - Founder profit sharing records
- **AccessLog** - Security and access logging
- **Season** - Seasonal pricing periods

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### 1. Clone the Repository

```bash
git clone <repository-url>
cd indoor_golf_maison_blanche
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment example file:

```bash
cp env.example .env.local
```

Fill in your environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database
DATABASE_URL=your_supabase_database_url

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# QR Code Configuration
QR_CODE_SECRET=your_qr_code_secret_key
```

### 4. Database Setup

Generate Prisma client:

```bash
npm run db:generate
```

Push the schema to your database:

```bash
npm run db:push
```

Seed the database with initial data:

```bash
npm run db:seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Seeding

The seed script creates:

- **6 Bays** (5 simulators + 1 putting bay)
- **Sample Users** with founder status
- **Price Rules** for all time bands and seasons
- **Sample Bookings** with access tokens
- **System Settings** for configuration

Run the seed script:

```bash
npm run db:seed
```

## 🔧 API Endpoints

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get bookings with filters

### QR Codes
- `POST /api/qr-code` - Generate QR code for booking
- `GET /api/qr-code` - Retrieve existing QR code

### Authentication
- Integrated with Supabase Auth
- Protected routes with middleware
- Role-based access control

## 💳 Payment Integration

### Stripe Setup
1. Create a Stripe account
2. Get your API keys from the dashboard
3. Set up webhook endpoints
4. Configure products for:
   - Hourly bookings
   - Monthly memberships
   - Founder packages (€1,000)

### Payment Flow
1. User selects time slot
2. System calculates price with discounts
3. Stripe Checkout session created
4. Payment processed
5. Booking confirmed with QR code

## 🔐 Security Features

- **Row Level Security (RLS)** in Supabase
- **Access token validation** for QR codes
- **Time-based access windows** (10 min before/after)
- **Comprehensive logging** of all access attempts
- **Secure payment processing** with Stripe

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized QR code scanning
- Progressive Web App capabilities

## 🎨 Design System

### Color Palette
- **Primary**: Golf Green (#22c55e)
- **Secondary**: White/Gray tones
- **Accent**: Yellow/Gold for founder elements
- **Background**: Gradient from golf-50 to white

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading structure
- **Readability**: High contrast ratios

### Components
- Consistent button styles
- Card-based layouts
- Elegant form inputs
- Premium shadows and effects

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 Analytics & Monitoring

### Admin Dashboard Features
- **Utilization Heatmap** - Real-time bay usage
- **Revenue Analytics** - P&L and profit tracking
- **User Management** - Member and founder oversight
- **Booking Reports** - Detailed booking analytics
- **Data Export** - CSV exports for analysis

## 🔄 Future Enhancements

### Stretch Goals
- [ ] Auto-lighting integration
- [ ] Leaderboard and leagues
- [ ] Profit-share simulation reports
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for Maison Blanche Indoor Golf.

## 📞 Support

For technical support or questions:
- Email: support@maisonblanchegolf.com
- Phone: +33 1 23 45 67 89

---

**Built with ❤️ for Maison Blanche Indoor Golf**
