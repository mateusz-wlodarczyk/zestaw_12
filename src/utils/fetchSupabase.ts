import { createClient } from '@supabase/supabase-js';
import { NewObjPizza, NewObjSandwich, NewObjSoup } from './types';

export const SUPABASE_URL = 'https://rqbzgjjytqgzslodlusq.supabase.co';

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
export const supabase = createClient(SUPABASE_URL, supabaseKey);

export async function sendObj(obj: NewObjPizza | NewObjSoup | NewObjSandwich) {
  const dataToServer = JSON.stringify(obj);
  try {
    await supabase
      .from('zestaw_12')
      .insert([{ json: dataToServer }])
      .select();
    return { value: 'data' };
  } catch (error) {
    return { value: 'error' };
  }
}
