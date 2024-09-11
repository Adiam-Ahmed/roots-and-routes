import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const getSession = async () => {
    const { data: session } = await supabase.auth.getSession();
    return session;
};

export const supabase = createClient(supabaseUrl, supabaseKey);