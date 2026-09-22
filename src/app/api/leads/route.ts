import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

function getClient() {
  return createClient(supabaseUrl, supabaseAnonKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, source } = body;

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email or Phone is required to submit an inquiry.' },
        { status: 400 }
      );
    }

    const leadId = randomUUID();
    const supabase = getClient();
    const { error } = await supabase.from('leads').insert({
      id: leadId,
      name: name || 'Anonymous Visitor',
      email: email || '',
      phone: phone || '',
      message: message || '',
      service: service || 'General Marketing Inquiry',
      source: source || 'Website Form',
      status: 'New',
    });

    if (error) {
      console.error('Lead submission error:', error);
      return NextResponse.json(
        { error: 'Failed to process lead submission.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received and recorded successfully.',
      leadId,
    });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead submission.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Never publish stored contact details through an unauthenticated endpoint.
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  try {
    const supabase = getClient();
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ leads: [] });
    }
    return NextResponse.json({ leads: data, count: data.length });
  } catch (error) {
    return NextResponse.json({ leads: [] });
  }
}
