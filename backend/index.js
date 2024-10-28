require('dotenv').config()
console.log("Iniciado")
async function startServer() {
    try {
        const port = process.env.PORT || 8080
        const user = process.env.USER
        const pass = process.env.PASS
        const nodemailer = require('nodemailer')
        const cors = require('cors')
        const express = require('express')
        const app = express()
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())
        // Middleware para CORS
        app.use(cors({
            origin: ['https://sugar.coach', 'http://localhost:8081'],
            methods: ['POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        }))
        // POST METHOD API URL
        app.get('/', (req, res) => {
            res.send("hola mundo")
        })
        app.post('/submit', (req, res) => {
            const {username, email} = req.body
            const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
            });

            const mailOptions = {
                from: user,
                to: user, // Aquí pones la dirección a la que quieres enviar el correo
                subject: `Cuenta borrada: ${username}` ,
                text: `Nombre: ${username}, Email: ${email}`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                console.log(error);
                } else {
                console.log('Email enviado: ' + info.response);
                }
            });
            
            res.send( `\nreq.body:\n${username} ${email}`)
            // res.json({   
            // message: 'Formulario enviado correctamente' });
            
        })

        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`);
        });
    }catch (err) {
        console.error(error);
    }   
}
startServer()
// const nodemailer = require('nodemailer');
// const path = require('path');

// Configura Express para poder recibir datos de formularios
// app.use(express.urlencoded({ extended: false }));
// app.use(require('./routes/index'));
// app.use(express.static(path.join(__dirname, 'views')));


// Ruta para procesar el formulario
// app.post('/submit', (req, res) => {
  
//     
// });
