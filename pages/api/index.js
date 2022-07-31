/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer'

export default async (req, res)  =>{
  const {email, nombre, descripcion, categoria} = req.body;

  var transport = nodemailer.createTransport({
    host: process.env.NEXT_EMAIL_HOST,
    port: process.env.NEXT_EMAIL_PORT,
    secure: process.env.NEXT_EMAIL_SECURE,
    auth: {
      user: process.env.NEXT_EMAIL_USER,
      pass: process.env.NEXT_EMAIL_PASS,
    },
  });
try {
  await transport.sendMail({
    from: email,
    to: 'contacto@boremobiliarios.com',
    subject: "Bore Mobiliarios",
    text: "Solicitud de presupuesto Bore Mobiliarios",
    html: `
        <h3> ${nombre} te envió una solicitud de presupuesto</h3>
        <p>Categoria: ${categoria}</p>
        <p>Mensaje: ${descripcion}</p>
        <p>Ver mensaje completo <a href="www.boremobiliarios.com/dashboard">Aquí</a> </p>    
        
        `,
  });
  res.status(200).json({response: 'Correo enviado'})
} catch (error) {
  console.log(error.message);
}
}

