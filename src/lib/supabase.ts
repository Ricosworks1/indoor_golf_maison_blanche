import { createClient } from '@supabase/supabase-js'

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

// Use dummy values in demo mode to prevent build errors
const supabaseUrl = isDemoMode ? 'https://demo.supabase.co' : process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = isDemoMode ? 'demo-key' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const serviceRoleKey = isDemoMode ? 'demo-service-key' : process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = isDemoMode
  ? null as any // In demo mode, this won't be used
  : createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role key for admin operations
export const supabaseAdmin = isDemoMode
  ? null as any // In demo mode, this won't be used
  : createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
