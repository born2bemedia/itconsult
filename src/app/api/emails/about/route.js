import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      contactPerson,
      contactEmail,
      organisingCompany,
      eventName,
      eventLink,
      industry,
      eventLocation,
      eventDate,
      eventTopic,
      participationType,
      attachFiles,
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
      subject: "Event Request Submission",
      text: `
        Contact Person: ${contactPerson}
        Contact Email: ${contactEmail}
        Organising Company: ${organisingCompany}
        Event Name: ${eventName}
        Event Link: ${eventLink}
        Industry: ${industry}
        Event Location: ${eventLocation}
        Event Date: ${eventDate}
        Event Topic: ${eventTopic}
        Type of Participation: ${participationType}
        Attach Files: ${attachFiles && attachFiles.length > 0 ? attachFiles.join(", ") : "No files attached"}
      `,
    };

    const mailOptionsClient = {
      from: '"Your Company" <noreply@nexoria.ai>',
      to: contactEmail,
      subject: "Your Event Request Confirmation",
      html: `
        <p>Dear ${contactPerson},</p>
        <p>Thank you for your submission. We have received your event request and will get back to you soon.</p>
        <p>Here are the details of your submission:</p>
        <ul>
          <li><strong>Contact Person:</strong> ${contactPerson}</li>
          <li><strong>Contact Email:</strong> ${contactEmail}</li>
          <li><strong>Organising Company:</strong> ${organisingCompany}</li>
          <li><strong>Event Name:</strong> ${eventName}</li>
          <li><strong>Event Link:</strong> ${eventLink}</li>
          <li><strong>Industry:</strong> ${industry}</li>
          <li><strong>Event Location:</strong> ${eventLocation}</li>
          <li><strong>Event Date:</strong> ${eventDate}</li>
          <li><strong>Event Topic:</strong> ${eventTopic}</li>
          <li><strong>Type of Participation:</strong> ${participationType}</li>
          <li><strong>Attach Files:</strong> ${attachFiles && attachFiles.length > 0 ? attachFiles.join(", ") : "No files attached"}</li>
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