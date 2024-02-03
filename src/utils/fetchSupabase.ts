import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://rqbzgjjytqgzslodlusq.supabase.co';

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
export const supabase = createClient(SUPABASE_URL, supabaseKey);

//dobry typ ts objJson?>
export async function sendObj(objJSON: string) {
  try {
    await supabase
      .from('zestaw_12')
      .insert([{ json: objJSON }])
      .select();
    return { value: 'data' };
  } catch (error) {
    return { value: 'error' };
  }
}
