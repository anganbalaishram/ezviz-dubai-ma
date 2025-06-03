import nodemailer from 'nodemailer';

export async function post({ request }) {
  const data = await request.json();

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'laitonjamsanalemabameitei99@gmail.com',
      pass: 'Sanalemba991' // Use an app-specific password
    }
  });

  // Email options
  const mailOptions = {
    from: data.email,
    to: 'laitonjamsanalemabameitei99@gmail.com',
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Requirements:</strong> ${data.requirements?.join(', ') || 'None specified'}</p>
      <p><strong>Message:</strong> ${data.message || 'None provided'}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}