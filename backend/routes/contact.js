const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();

    // 2. Setup Nodemailer transporter (ONLY if password is provided)
    if (process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_16_character_app_password_here') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // 3. Define email options
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, 
        replyTo: email, 
        to: 'rhphotography676@gmail.com', 
        subject: `New Portfolio Collaboration Inquiry from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Portfolio Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // 4. Send email
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Skipped sending email because EMAIL_PASS is not configured yet. Data was still saved to MongoDB.');
    }

    res.status(201).json({ success: true, message: 'Message saved successfully!' });

  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ success: false, message: 'Failed to submit form. Please try again later.' });
  }
});

module.exports = router;
