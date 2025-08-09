/*
  # Create Contact Forms Tables

  1. New Tables
    - `contact_inquiries` - General contact form submissions
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

    - `smart_website_inquiries` - Smart website project inquiries
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `website_type` (text, required)
      - `budget` (text, required)
      - `timeline` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)

    - `ai_agent_inquiries` - AI agent project inquiries
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `agent_type` (text, required)
      - `use_case` (text, required)
      - `budget` (text, required)
      - `timeline` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for insert operations (no authentication required for contact forms)
    - Add policies for admin read access
*/

-- General contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Smart website inquiries table
CREATE TABLE IF NOT EXISTS smart_website_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  website_type text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- AI agent inquiries table
CREATE TABLE IF NOT EXISTS ai_agent_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  agent_type text NOT NULL,
  use_case text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE smart_website_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agent_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for contact forms (allow anyone to insert)
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit smart website inquiries"
  ON smart_website_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit AI agent inquiries"
  ON ai_agent_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies for authenticated users to read their own submissions
CREATE POLICY "Users can read their own contact inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Users can read their own smart website inquiries"
  ON smart_website_inquiries
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Users can read their own AI agent inquiries"
  ON ai_agent_inquiries
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');