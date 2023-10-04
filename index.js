const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const transporter = require("./helpers/mailer")

app.use(express.static('public'));

app.get("/login/:email/code", async function (req, res){
    const {email} = req.params
    const result = await transporter.sendMail({
    from: 'diegomoyano02@gmail.com', 
    to: email, 
    subject: "Hello ✔", 
    body: "Hello world?", 

});
console.log({result});
res.status(200).json({ok: true, message: "Codigo enviado con exito!"})
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});
app.get('/anda', (req, res) => {
    res.send("anda la pagina")
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
