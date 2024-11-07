import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!url || !anon_key) {
    throw new Error("Supabase environment variables are missing.");
}

export const supabase = createClient(url , anon_key)


