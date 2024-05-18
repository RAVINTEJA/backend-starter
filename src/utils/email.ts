import mailgun from 'mailgun-js';

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY!, domain: process.env.MAILGUN_DOMAIN! });

export const sendVerificationEmail = async (to: string, token: string) => {
  const url = `http://localhost:3000/api/auth/verify-email?token=${token}`;
  const data = {
    from: 'Your App <no-reply@yourdomain.com>',
    to,
    subject: 'Verify your email',
    html: `Click <a href="${url}">here</a> to verify your email.`,
  };
  await mg.messages().send(data);
};

export const sendPasswordResetEmail = async (to: string, token: string) => {
  const url = `http://localhost:3000/auth/reset-password?token=${token}`;
  const data = {
    from: 'Your App <no-reply@yourdomain.com>',
    to,
    subject: 'Reset your password',
    html: `Click <a href="${url}">here</a> to reset your password.`,
  };
  await mg.messages().send(data);
};
