import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      yourName,
      yourDomain,
      email,
      phone,
      cv,
      explanation,
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Your Company" <noreply@nexoria.ai>',
      to: "noreply@nexoria.ai", 
      subject: "New form People",
      text: `
        Your Name: ${yourName}
        Domain: ${yourDomain}
        Email: ${email}
        Phone: ${phone}
        CV: ${cv ? "File attached" : "No file attached"}
        Explanation: ${explanation}
      `,
    };

    const mailOptionsClient = {
      from: '"Your Company" <noreply@nexoria.ai>',
      to: email,
      subject: "Form Submission Confirmation",
      html: `
        <p>Dear ${yourName},</p>
        <p>Thank you for your submission. We have received your form and will get back to you soon.</p>
        <p>Here are the details of your submission:</p>
        <ul>
          <li><strong>Your Name:</strong> ${yourName}</li>
          <li><strong>Domain:</strong> ${yourDomain}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>CV:</strong> ${cv ? "File attached" : "No file attached"}</li>
          <li><strong>Explanation:</strong> ${explanation}</li>
        </ul>
        <p>Best regards,<br>Your Company</p>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);

    return NextResponse.json({ message: "COULD NOT SEND MESSAGE", error: error.message }, { status: 500 });
  }
}


