const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const transporter = require("./mailer")

app.use(express.static(path.join(__dirname, 'public')));

app.get("/enviar-correo", async function (req, res){
    const result = await transporter.sendMail({
    from: 'diegomoyano02@gmail.com', 
    to: 'diiegomoyano02@gmail.com', 
    subject: "Tu entrada al Reto deportivo", 
    text: "Hola! Bienvenidx al Reto! Recibes este correo porque ya casi formas parte del grupo    Estás a nada de entrar al grupo de Whatsapp dónde vivirás toda la experiencia.    Accede ahora para no perderte nada y estar preparadx una vez empecemos    Botón de Whatsapp con el enlace al grupoFecha:Del 17 de octubre all 21 de octubre.Importante que te reserves el día 21 de octubre a las 19:00. Voy a hacer una Masterclass en directo para llevar tu mentalidad al siguiente nivel.", 

});
console.log({result});
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
