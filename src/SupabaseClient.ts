import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://phrznvbbzytpnbjctpae.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocnpudmJienl0cG5iamN0cGFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjMwODcyNSwiZXhwIjoyMDM3ODg0NzI1fQ.pKDOlKqYWRXTMdsAeD69FgHuSJN3Dtulw0E4_t3TY6A';

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase URL or anonymous key in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
