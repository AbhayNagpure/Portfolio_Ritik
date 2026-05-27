require('dotenv').config();
const nodemailer = require('nodemailer');

async function testMail() {
  console.log("Testing Nodemailer...");
  console.log("User:", process.env.EMAIL_USER);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    let info = await transporter.sendMail({
      from: `"Test User" <${process.env.EMAIL_USER}>`,
      to: 'rhphotography676@gmail.com',
      subject: 'Test email from backend',
      text: 'This is a test email.',
    });
    console.log('Message sent successfully:', info.messageId);
  } catch (err) {
    console.error('Error sending email:', err);
  }
}

testMail();
