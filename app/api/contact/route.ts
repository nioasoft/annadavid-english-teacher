import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'resend_api_key_needed');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, language, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Anti-spam: Check if message is too short or contains suspicious patterns
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Message is too short. Please provide more details.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    try {
      const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
      const toEmail = process.env.TO_EMAIL || 'miss.anna.davidi@gmail.com';

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Language:</strong> ${language}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { success: false, message: 'Failed to send email' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { success: false, message: 'Email service error' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
