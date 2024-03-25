import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fpnllqlqrnlxztzibife.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbmxscWxxcm5seHp0emliaWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzgwMDgsImV4cCI6MjAyNjExNDAwOH0.RXN5J5KKuPb_p1P5VnZwmtbFGFfC3xD5Y9Iat-w_0w4'
export const supabase = createClient(supabaseUrl, supabaseKey)