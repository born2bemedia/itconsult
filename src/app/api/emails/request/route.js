import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName, 
      company, 
      email, 
      phone, 
      activity, 
      website, 
      challenge, 
      urgency, 
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
      from: '"Nexoria" <noreply@nexoria.ai>', 
      to: "noreply@nexoria.ai", //
      subject: "Consultation Request",
      text: `Name: ${yourName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Activity: ${activity}
Website: ${website}
Challenge: ${challenge}
Urgency: ${urgency}`,
    };

    const mailOptionsClient = {
      from: '"Nexoria" <noreply@nexoria.ai>', 
      to: email, 
      subject: "nexoria - Consultation Request Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">

        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);

    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}