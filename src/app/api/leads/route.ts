import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
      await resend.emails.send({
        from: 'EngageM Solutions <info@engagemsolutions.com>',
        to: ['info@engagemsolutions.com'],
        subject: 'New Lead Submission',
        html: `
          <h2>New Lead from Website</h2>
          <p><strong>Name:</strong> ${name || 'Anonymous Visitor'}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'General Marketing Inquiry'}</p>
          <p><strong>Source:</strong> ${source || 'Website Form'}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided.'}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // We don't return an error here because the lead was successfully saved to the database.
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
