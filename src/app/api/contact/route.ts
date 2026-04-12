import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
});

export async function POST(request: Request) {
  // --- DEBUGGING LINE FOR VERCEL ---
  console.log("Estado de la API KEY en Vercel:", process.env.MAILERSEND_API_KEY ? `Existe (Longitud: ${process.env.MAILERSEND_API_KEY.length})` : "VACIA O NO DEFINIDA");
  
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'El correo electrónico es requerido.' }, { status: 400 });
    }

    const sentFrom = new Sender('no-reply@jromana.com', 'Mi Portafolio');
    const recipients = [new Recipient('jr@jromana.com', 'Justin Romaña')];

    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "No especificado";

    const messageHtml = `
      <h2>Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(email, fullName !== "No especificado" ? fullName : "Visitante"))
      .setSubject(`Nuevo mensaje de ${fullName !== "No especificado" ? fullName : email}`)
      .setHtml(messageHtml)
      .setText(`Nombre: ${fullName}\nEmail: ${email}`);

    await mailersend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error enviando correo:", error);
    // Extraer mensaje real de MailerSend (generalmente está en error.body.message si fallan credenciales o el dominio no está verificado)
    const errObj = error.body ? error.body : error;
    return NextResponse.json({ error: errObj.message || 'Hubo un error al enviar el correo.' }, { status: 500 });
  }
}
