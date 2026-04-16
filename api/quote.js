import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, product, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Spartan Fencing Supplies <noreply@spartanfencingsupplies.com>',
      to: 'spartanfencingsuppliesllc@gmail.com',
      replyTo: email,
      subject: `New Quote Request — ${product || 'General'} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1c1c1e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #c8952a; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">
              Spartan Fencing Supplies
            </h1>
            <p style="color: #ffffff99; margin: 4px 0 0; font-size: 14px;">New Quote Request</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Company</td><td style="padding: 8px 0; font-size: 14px;">${company || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #c8952a;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${phone || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Product</td><td style="padding: 8px 0; font-size: 14px;">${product || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Project Type</td><td style="padding: 8px 0; font-size: 14px;">${projectType || '—'}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Project Details</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #999; font-size: 12px; margin: 0;">
              Reply directly to this email to respond to ${name} at ${email}
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
