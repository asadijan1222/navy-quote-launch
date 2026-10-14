import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { quoteSchema } from './quote-schema';
export const submitQuote=createServerFn({method:'POST'}).inputValidator((input:unknown)=>quoteSchema.parse(input)).handler(async({data})=>{
 const key=process.env['SUPABASE_PUBLISHABLE_KEY']; const url=process.env['SUPABASE_URL'];
 if(!key || !url) return {ok:false,error:'We could not save your request. Please contact us on WhatsApp.'};
 const client=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const headers=new Headers(init?.headers); if(key.startsWith('sb_') && headers.get('Authorization')===`Bearer ${key}`) headers.delete('Authorization'); headers.set('apikey',key); return fetch(input,{...init,headers});}}});
 const {website,consent,...request}=data;
 const {error}=await client.from('quote_requests').insert(request);
 if(error) return {ok:false,error:'We could not save your request. Please try again or contact us on WhatsApp.'};
 return {ok:true,error:''};
});
