import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendMail = async (to, subject, html) => {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  await transporter.sendMail({ from, to, subject, html });
};

const sendVerificationEmail = async (to, token) => {
  const baseUrl = process.env.APP_BASE_URL || "http://localhost:5000";
  const link = `${baseUrl}/api/auth/verify-email/${token}`;
  const subject = "Verify your email";
  const html = `
    <p>Click the link below to verify your account:</p>
    <p><a href="${link}">${link}</a></p>
  `;
  await sendMail(to, subject, html);
};

export { sendMail, sendVerificationEmail };
