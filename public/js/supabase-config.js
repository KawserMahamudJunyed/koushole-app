// Supabase Configuration (Non-Module Version)
// This file uses the global 'supabase' object loaded from CDN

const SUPABASE_URL = 'https://mocbdqgvsunbxmrnllbr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vY2JkcWd2c3VuYnhtcm5sbGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNzU4ODgsImV4cCI6MjA4Mjc1MTg4OH0.kluKPXb0QCeReZUiD1xjV7U7c3zKYmt76qx0OXYYtrg';

console.log("🔌 Supabase Config Loading...");
console.log("📍 URL:", SUPABASE_URL);

try {
    // Use the global supabase object from CDN
    if (typeof supabase === 'undefined') {
        throw new Error("Supabase SDK not loaded. Make sure the CDN script is included before this file.");
    }

    const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = client;
    console.log("✅ Supabase Client initialized and attached to window.supabaseClient");

    // Add URL property for XHR uploads
    window.supabaseClient.supabaseUrl = SUPABASE_URL;

    // Test function
    window.testSupabaseConnection = async function () {
        console.log("🧪 Testing Supabase Connection...");

        try {
            if (!window.supabaseClient) {
                console.error("❌ Supabase client not found on window");
                return false;
            }
            console.log("✅ Client exists");

            const { data: { session }, error: sessionError } = await window.supabaseClient.auth.getSession();
            if (sessionError) {
                console.error("❌ Session error:", sessionError);
            } else {
                console.log("✅ Session check passed. Logged in:", !!session);
                if (session) {
                    console.log("👤 User ID:", session.user.id);
                    console.log("📧 Email:", session.user.email);
                }
            }

            console.log("🎉 Supabase connection test complete!");
            return true;

        } catch (err) {
            console.error("❌ Test failed with exception:", err);
            return false;
        }
    };

    console.log("💡 Tip: Run testSupabaseConnection() in console to verify connection");

} catch (err) {
    console.error("❌ Supabase Init Error:", err);
    alert("Critical Error: Supabase failed to initialize. Check console for details.");
}
