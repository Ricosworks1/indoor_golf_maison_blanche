# Maison Blanche Indoor Golf - Demo Deployment

🎭 **This is a mockup version with simulated data for demonstration purposes.**

## 🚀 Quick Demo Deployment

### Option 1: Vercel (Recommended - 2 minutes)
1. **Fork this repository** to your GitHub account
2. **Go to [vercel.com](https://vercel.com)** and sign up
3. **Click "New Project"** and import your forked repository
4. **Deploy** - Vercel will automatically build and deploy
5. **Share the URL** - Your demo will be live!

### Option 2: Netlify (Alternative - 2 minutes)
1. **Fork this repository** to your GitHub account
2. **Go to [netlify.com](https://netlify.com)** and sign up
3. **Click "New site from Git"** and connect your repository
4. **Build settings**: 
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Deploy** and share the URL

### Option 3: Local Development (5 minutes)
```bash
# Clone the repository
git clone <your-forked-repo>
cd indoor_golf_maison_blanche

# Install dependencies
npm install

# Run demo mode
npm run demo

# Open http://localhost:3001
```

## 🎭 What's Included in Demo Mode

### ✅ **Fully Functional Features**
- **Complete UI/UX** - All pages and components working
- **Booking System** - Full booking flow with mock data
- **Payment Simulation** - Stripe-like checkout process
- **QR Code Generation** - Demo QR codes for access
- **User Authentication** - Sign up/sign in with demo users
- **Admin Dashboard** - Analytics and management interface
- **Responsive Design** - Works on all devices

### 📊 **Demo Data**
- **3 Sample Users** - Including 2 founders with different benefits
- **6 Golf Bays** - 5 simulators + 1 putting bay
- **Sample Bookings** - Pre-populated with different pricing tiers
- **Mock Analytics** - Utilization data and revenue reports

### 🔧 **No External Dependencies**
- **No Database Required** - All data is simulated
- **No Payment Processing** - Uses mock Stripe integration
- **No Authentication Service** - Local demo authentication
- **No API Keys Needed** - Everything works out of the box

## 🎯 Demo User Accounts

### Regular User
- **Email**: `john.doe@example.com`
- **Password**: `password123`
- **Benefits**: Standard pricing, no discounts

### Founder User 1
- **Email**: `sarah.martin@example.com`
- **Password**: `password123`
- **Benefits**: 50% lifetime discount, profit sharing

### Founder User 2
- **Email**: `marcus.leblanc@example.com`
- **Password**: `password123`
- **Benefits**: 50% lifetime discount, profit sharing

## 📱 Demo Features to Showcase

### 1. **Booking System** (`/demo/book`)
- Select date and bay
- View real-time availability
- See dynamic pricing
- Complete booking flow
- Generate QR code access

### 2. **Membership Plans** (`/demo/membership`)
- Standard, Premium, and Founder plans
- Pricing comparison
- Benefit details
- Mock checkout process

### 3. **Founder Program** (`/demo/founders-offer`)
- ROI calculator
- Lifetime benefits
- Limited availability (47/100)
- Investment breakdown

### 4. **Admin Dashboard** (`/demo/admin`)
- Utilization heatmap
- Revenue analytics
- User management
- Booking reports

### 5. **Authentication** (`/demo/auth/signin`)
- Sign up/sign in forms
- Demo user accounts
- Protected routes
- User profiles

## 🌐 Demo URLs Structure

When deployed, your demo will have these pages:
- `/` - Homepage
- `/demo/book` - Booking system
- `/demo/membership` - Membership plans
- `/demo/founders-offer` - Founder program
- `/demo/admin` - Admin dashboard
- `/demo/auth/signin` - Sign in
- `/demo/auth/signup` - Sign up
- `/demo/pricing` - Pricing details
- `/demo/faqs` - FAQ section
- `/demo/contact` - Contact form

## 💡 Perfect For

- **Stakeholder Demos** - Show the complete platform
- **User Testing** - Gather feedback before production
- **Investor Presentations** - Demonstrate functionality
- **Client Reviews** - Get approval before full development
- **Marketing** - Showcase features to potential customers

## 🔄 From Demo to Production

When ready for production deployment:

1. **Set up Supabase** database
2. **Configure Stripe** payments
3. **Update environment variables**
4. **Remove mock data** and enable real APIs
5. **Deploy to production** environment

The demo code is designed to be easily convertible to production with minimal changes.

## 📞 Support

For demo deployment help or questions:
- Check the main README.md for full documentation
- All demo features work exactly like production
- No setup or configuration required

---

**🎭 Demo Mode: All features functional with simulated data - No real payments or bookings processed**
