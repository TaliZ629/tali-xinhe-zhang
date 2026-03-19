-- Create section comments table
CREATE TABLE public.section_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.section_comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read comments
CREATE POLICY "Comments are viewable by everyone"
  ON public.section_comments FOR SELECT USING (true);

-- Anyone can insert comments (public portfolio, no auth required)
CREATE POLICY "Anyone can post comments"
  ON public.section_comments FOR INSERT WITH CHECK (true);