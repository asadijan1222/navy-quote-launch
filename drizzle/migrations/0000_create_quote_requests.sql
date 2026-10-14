CREATE TABLE public.quote_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 customer_name text NOT NULL CHECK (char_length(customer_name) BETWEEN 2 AND 100),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
 interest text NOT NULL CHECK (interest IN ('Curtains','Curtain accessories','Carpets and rugs','Interior finishing','Other / Not sure yet')),
 room_type text NOT NULL CHECK (char_length(room_type) BETWEEN 2 AND 100),
 contact_method text NOT NULL CHECK (contact_method IN ('WhatsApp','Phone')),
 details text NOT NULL DEFAULT '' CHECK (char_length(details) <= 2000)
);
GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit bounded inquiries" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (char_length(customer_name) BETWEEN 2 AND 100 AND char_length(phone) BETWEEN 7 AND 25 AND char_length(details) <= 2000);