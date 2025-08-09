/*
  # Update Contact Tables Schema

  1. Modified Tables
    - `contact_inquiries` - Updated to match main contact form exactly
    - `smart_website_inquiries` - Updated to match smart websites form exactly  
    - `ai_agent_inquiries` - Updated to match AI agents form exactly

  2. New Columns Added
    - `contact_inquiries.service` - Service selection from main form
    - `ai_agent_inquiries.need` - What the user needs from AI agents form
    - `smart_website_inquiries.project_type` - Project type from smart websites form

  3. Renamed Columns
    - `smart_website_inquiries.name` -> matches `fullName` from form
    - `smart_website_inquiries.email` -> matches `emailAddress` from form
    - `smart_website_inquiries.message` -> matches `projectDescription` from form

  4. Security
    - All tables maintain RLS and existing policies
*/

-- Update contact_inquiries table to match main contact form
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'service'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN service text DEFAULT '';
  END IF;
END $$;

-- Update ai_agent_inquiries table to match AI agents form
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_agent_inquiries' AND column_name = 'need'
  ) THEN
    ALTER TABLE ai_agent_inquiries ADD COLUMN need text DEFAULT '';
  END IF;
END $$;

-- Update smart_website_inquiries table to match smart websites form
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'smart_website_inquiries' AND column_name = 'project_type'
  ) THEN
    ALTER TABLE smart_website_inquiries ADD COLUMN project_type text DEFAULT '';
  END IF;
END $$;