import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set. Email functionality will be disabled.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', params);
    return true; // Return true for development mode
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully to:', params.to);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function generateContactEmailTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
}): { html: string; text: string } {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
        .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Portfolio Website Contact Form</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          ${data.budget ? `
          <div class="field">
            <div class="label">Budget:</div>
            <div class="value">${data.budget}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your portfolio contact form.</p>
          <p>Sent on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}
${data.budget ? `Budget: ${data.budget}` : ''}

Message:
${data.message}

Sent on ${new Date().toLocaleString()}
  `;

  return { html, text };
}