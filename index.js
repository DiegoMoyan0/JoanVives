const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const transporter = require("./mailer")

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post("/enviar-correo", async function (req, res) {
    const  { email }  = req.body;
    const mailEnvio = "diegomoyano02@gmail.com";
    const result = await transporter.sendMail({
      from: `Joan Vives ${mailEnvio}`,
      to: email,
      subject: "Tu acceso al Desafio deportivo",
      html: `
        <p>Hola! Bienvenidx al Reto!</p>
        <p>Recibes este correo porque ya casi formas parte del grupo.</p>
        <p><b>Estás a nada de entrar al grupo de Whatsapp dónde vivirás toda la experiencia.</b></p>
        <p>Accede ahora para no perderte nada y estar preparadx una vez empecemos.</p>
        <a href="https://chat.whatsapp.com/LsQjZpF1n5qIk6vu7ufnQZ">
          <button style="background-color: #25d366; color: white; padding: 20px 35px; border: none; border-radius: 5px; text-align: center;">Link de Whatsapp</button></a>
        <p>Fecha: Del 17 de octubre al 21 de octubre.</p>
        <p><b>Importante que te reserves el día 21 de octubre a las 19:00.</b></p>
        <p>Voy a hacer una Masterclass en directo para llevar tu mentalidad al siguiente nivel.</p>
      `,
    });
  
res.sendFile(path.join(__dirname,'public', '/acces.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor web iniciado en el puerto ${port}`);
})

// tls: {
//     rejectUnauthorized: false // Ignorar errores de certificado
// }
// Ruta para enviar un correo
// app.get('/enviar-correo', (req, res) => {
//     const mailOptions = {
//         from: 'diegomoyano02@gmail.com',
//         to: 'diegoalejomoyano@gmail.com',
//         subject: 'Asunto del correo',
//         text: 'Contenido del correo',
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.send('Error al enviar el correo');
//         } else {
//             console.log('Correo enviado: ' + info.response);
//             res.sendFile(path.join(__dirname, '/views/acces.html'));
//         }
//     });
// })
