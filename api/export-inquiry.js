import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape user input before placing it in the email HTML
const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const row = (label, value) =>
  `<tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 150px; vertical-align: top;">${label}</td><td style="padding: 8px 0; font-size: 14px;">${esc(value) || '—'}</td></tr>`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, country, city, shipping, timeline, notes, items } = req.body || {};
  const materials = Array.isArray(items) ? items.filter((item) => item && item.material) : [];

  if (!name || !email || !country || materials.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const materialRows = materials
    .map((item) => `<tr><td style="padding: 6px 8px; border-bottom: 1px solid #e5e5e5; font-size: 14px;">${esc(item.material)}</td><td style="padding: 6px 8px; border-bottom: 1px solid #e5e5e5; font-size: 14px;">${esc(item.quantity) || '—'}</td></tr>`)
    .join('');

  try {
    await resend.emails.send({
      from: 'Spartan Fencing Supplies <noreply@spartanfencingsupplies.com>',
      to: ['spartanfencingsuppliesllc@gmail.com', 'info@spartanfencingsupplies.com'],
      replyTo: email,
      subject: `New EXPORT Inquiry — ${country} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1c1c1e; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #c8952a; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">
              Spartan Fencing Supplies
            </h1>
            <p style="color: #ffffff99; margin: 4px 0 0; font-size: 14px;">New Export Inquiry</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <p style="color: #666; font-size: 13px; margin: 0 0 8px; text-transform: uppercase;">Destination</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${row('Country', country)}
              ${row('City / Port', city)}
              ${row('Shipping', shipping)}
              ${row('Needed By', timeline)}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0 0 8px; text-transform: uppercase;">Materials &amp; Quantities</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><th style="text-align: left; padding: 6px 8px; font-size: 12px; color: #666; border-bottom: 2px solid #e5e5e5;">Material</th><th style="text-align: left; padding: 6px 8px; font-size: 12px; color: #666; border-bottom: 2px solid #e5e5e5;">Quantity</th></tr>
              ${materialRows}
            </table>
            <p style="color: #666; font-size: 13px; margin: 16px 0 8px;">Additional Details</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${esc(notes) || '—'}</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0 0 8px; text-transform: uppercase;">Contact</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${row('Name', name)}
              ${row('Company', company)}
              ${row('Email', email)}
              ${row('Phone / WhatsApp', phone)}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #999; font-size: 12px; margin: 0;">
              Reply directly to this email to respond to ${esc(name)} at ${esc(email)}
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
