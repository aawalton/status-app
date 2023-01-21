import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://horcasnctsmodefampep.supabase.co'
export const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvcmNhc25jdHNtb2RlZmFtcGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NzA4MzIsImV4cCI6MTk3OTU0NjgzMn0.hob_PYZXJ1UgAplyMWT9F1i5g5zix6oj2cL77l0EUMQ'

// eslint-disable-next-line import/prefer-default-export
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
