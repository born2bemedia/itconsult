import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, email, phone, service, company, website, activity, agreeToPolicy } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
      to: "noreply@nexoria.ai",
      subject: "Order Form Submission",
      text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nCompany name: ${company}\nCompany website: ${website}\nActivity: ${activity}\nAgree to Policy: ${agreeToPolicy}`,
    };

    const mailOptionsClient = {
      from: '"Nexoria" <noreply@nexoria.ai>',
      to: email,
      subject: "Service Order Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <!-- Нужен дизайн письма :) -->
        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}