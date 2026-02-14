/*
  # Fix RLS Security Issues

  ## Changes
  1. Remove insecure RLS policies with `WITH CHECK (true)`
  2. Tables will only be accessible via authenticated edge functions using service role
  
  ## Security Improvements
  - Anonymous users can no longer directly insert into contact tables
  - All form submissions must go through validated edge functions
  - Edge functions can implement rate limiting and input validation
  - Prevents spam and malicious submissions
  
  ## Tables Affected
  - main_contact_submissions
  - ai_agents_submissions
  - smart_websites_submissions
*/

-- Drop insecure policies
DROP POLICY IF EXISTS "Anyone can submit main contact form" ON main_contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit ai agents form" ON ai_agents_submissions;
DROP POLICY IF EXISTS "Anyone can submit smart websites form" ON smart_websites_submissions;

-- Tables remain RLS-enabled but with no anonymous access
-- Access will be granted only through edge functions using service role key