import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req,res) {
    const { body } = await req;
    const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["mei260629@gmail.com", email],
      subject: subject,
      react: (
        <>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted</p>
            <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
