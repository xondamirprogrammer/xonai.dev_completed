import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  formType: 'main_contact' | 'ai_agents' | 'smart_websites';
  name?: string;
  email?: string;
  fullName?: string;
  emailAddress?: string;
  service?: string;
  message?: string;
  need?: string;
  projectType?: string;
  projectDescription?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData: ContactFormData = await req.json();

    if (!formData.formType) {
      return new Response(
        JSON.stringify({ error: "Form type is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    let result;

    switch (formData.formType) {
      case 'main_contact':
        if (!formData.name || !formData.email || !formData.message) {
          return new Response(
            JSON.stringify({ error: "Name, email, and message are required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        result = await supabase.from('main_contact_submissions').insert({
          name: formData.name,
          email: formData.email,
          service: formData.service || '',
          message: formData.message,
        });
        break;

      case 'ai_agents':
        if (!formData.fullName || !formData.emailAddress || !formData.projectDescription) {
          return new Response(
            JSON.stringify({ error: "Full name, email, and project description are required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        result = await supabase.from('ai_agents_submissions').insert({
          full_name: formData.fullName,
          email_address: formData.emailAddress,
          project_type: formData.projectType || '',
          project_description: formData.projectDescription,
        });
        break;

      case 'smart_websites':
        if (!formData.fullName || !formData.emailAddress || !formData.projectDescription) {
          return new Response(
            JSON.stringify({ error: "Full name, email, and project description are required" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        result = await supabase.from('smart_websites_submissions').insert({
          full_name: formData.fullName,
          email_address: formData.emailAddress,
          project_type: formData.projectType || '',
          project_description: formData.projectDescription,
        });
        break;

      default:
        return new Response(
          JSON.stringify({ error: "Invalid form type" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
    }

    if (result.error) {
      console.error('Database error:', result.error);
      return new Response(
        JSON.stringify({ error: "Failed to submit form" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
