import nodemailer from 'nodemailer'


export async function POST(req) {
  // Parse the request body
  const { fullName, phone, email, companyName, business, state, position, subject, message, website } = await req.json();

  if (website && website.trim() !== "") {
    console.log("Spam bot detected via honeypot.");
    return new Response(JSON.stringify({ message: "Spam detected" }), {
      status: 400,
    });
  }

  const usPhoneNumberRegex = /^\+1 \d{3}-\d{3}-\d{4}$/;

  if (!fullName || !phone || !email || !message || !companyName || !business || !position || !state || !subject || !message) {
    return new Response(JSON.stringify({ message: 'Please fill the required fields.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!usPhoneNumberRegex.test(phone)) {
    return new Response(JSON.stringify({ message: 'Invalid phone number format. Please use +1 XXX-XXX-XXXX.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS 
    }
  })

  try {
    //send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Website Contact Us Form - ${subject}`,
      html: `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
         <h2 style="color: #0056b3;">New Contact Form Submission</h2>
         <p>You have received a new message from your website contact form.</p>
         <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
         <p><strong>Full Name:</strong> ${fullName}</p>
         <p><strong>Phone Number:</strong> ${phone}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Company Name:</strong> ${companyName}</p>
         <p><strong>Business Type:</strong> ${business}</p>
         <p><strong>State:</strong> ${state}</p>
         <p><strong>Subject:</strong> ${subject}</p>
         <p><strong>position:</strong> ${position}</p>
         <p><strong>Message:</strong></p>
         <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">${message}</p>
         <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
         <p style="font-size: 0.9em; color: #666;">This email was sent from your website's contact form.</p>
       </div>
     `,
    })

    console.log('message is sent')
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error.message)
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}