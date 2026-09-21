import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name || 'Anonymous Visitor',
      email: email || '',
      phone: phone || '',
      message: message || '',
      service: service || 'General Marketing Inquiry',
      source: source || 'Website Form',
      createdAt: new Date().toISOString(),
      status: 'New',
    };

    // Store in local JSON database
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const leadsFilePath = path.join(dataDir, 'leads.json');
    let leads: any[] = [];
    if (fs.existsSync(leadsFilePath)) {
      try {
        const fileContent = fs.readFileSync(leadsFilePath, 'utf-8');
        leads = JSON.parse(fileContent);
      } catch (err) {
        leads = [];
      }
    }

    leads.unshift(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Lead received and recorded successfully.',
      leadId: newLead.id,
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
    const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json');
    if (!fs.existsSync(leadsFilePath)) {
      return NextResponse.json({ leads: [] });
    }
    const fileContent = fs.readFileSync(leadsFilePath, 'utf-8');
    const leads = JSON.parse(fileContent);
    return NextResponse.json({ leads, count: leads.length });
  } catch (error) {
    return NextResponse.json({ leads: [] });
  }
}
