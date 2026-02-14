/*
  # Create Contact Form Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `service` (text)
      - `message` (text, not null)
      - `created_at` (timestamptz, default now())

    - `ai_agents_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `need` (text)
      - `message` (text, not null)
      - `created_at` (timestamptz, default now())

    - `smart_websites_inquiries`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email_address` (text, not null)
      - `project_type` (text)
      - `project_description` (text, not null)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on all 3 tables
    - Add insert-only policy for anonymous users on each table
      (public contact forms that anyone can submit)
*/

-- General Contact Form table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- AI Agents Contact Form table
CREATE TABLE IF NOT EXISTS ai_agents_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  need text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_agents_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit AI agents inquiry"
  ON ai_agents_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Smart Websites Contact Form table
CREATE TABLE IF NOT EXISTS smart_websites_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email_address text NOT NULL,
  project_type text DEFAULT '',
  project_description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE smart_websites_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit smart websites inquiry"
  ON smart_websites_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);
