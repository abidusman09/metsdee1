import { NextResponse } from "next/server";
import { mailer } from "@/lib/nodemailer";

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json();

  if (!name || !email) {
    return new NextResponse("Insufficient Info!", { status: 401 });
  }
  try {
    const sendEmail = await mailer.sendMail({
      to: email, // Change to your recipient
      from: '"MetaDee" <contact@metalgroundai.com>', // Change to your verified sender
      subject: "Thank Your Contacting Us",
      text: "Thans you for contacting MetaDee",
      html: `<div>
        <h1>Thank You For Contacting Us</h1>
        <p>Our team will contact you within 2 hours.</p>
        </div>`,
    });
    const newEmail = await mailer.sendMail({
      to: "contact@metalgroundai.com", // Change to your recipient
      from: '"MetaDee" <contact@metalgroundai.com>', // Change to your verified sender
      subject: "Contact Details MetaDee",
      text: "Contact details of MetaDee",
      html: `<div>
        <h1>Contact Details</h1>
        <h2>Name : ${name}</h2>
        <h2>Emai;l : ${email}</h2>
        <h2>Message : ${message}</h2>
        </div>`,
    });
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log("EMAIL ERROR", error);
    return new NextResponse("Internal Error!", { status: 500 });
  }
};
