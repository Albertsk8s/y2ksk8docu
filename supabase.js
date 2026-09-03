// ============================================
// y2ksk8docu — SUPABASE CONNECTION
// ============================================

window.supabaseClient = window.supabase.createClient(
  "https://qffkqanrccvmemvwssuy.supabase.co",
  "sb_publishable_JCr7301A94N8ILttTH3FRQ_nxqrf4C1",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
