import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log(supabaseUrl)
export const supabase = createClient(supabaseUrl, supabaseKey);


// https://rrzvrtyvfbjmyhzbywgi.supabase.co/rest/v1/teste