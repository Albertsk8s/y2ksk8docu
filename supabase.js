```javascript
// ==========================================
// Y2KSK8DOCU — SUPABASE CONNECTION
// ==========================================

// Paste your Supabase Project URL between the quotes.
const SUPABASE_URL = "https://supabase.com/dashboard/org/thnqfluhjyfqxiaplxns";

// Paste your Supabase Publishable Key between the quotes.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_JCr7301A94N8ILttTH3FRQ_nxqrf4C1";

// Create the Supabase client.
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
```
