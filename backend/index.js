require('dotenv').config()
console.log('Iniciado')
async function startServer() {
    try {
        const port = process.env.PORT || 8080
        const user = process.env.EMAIL
        const pass = process.env.PASS
        const nodemailer = require('nodemailer')
        const cors = require('cors')
        const express = require('express')
        const app = express()
        app.use(express.urlencoded({ extended: false }))
        app.use(express.json())
        // Middleware para CORS
        app.use(
            cors({
                origin: ['https://sugar.coach', 'http://localhost:8081'],
                methods: ['POST'],
                allowedHeaders: ['Content-Type', 'Authorization'],
                credentials: true
            })
        )
        // POST METHOD API URL
        app.get('/', (req, res) => {
            res.send('Funciona!!')
        })
        app.post('/submit', (req, res) => {
            const { formId, name, email, message} = req.body
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: user,
                    pass: pass
                }
            })
            let mailOptions;
            if (formId === 'contact-form') {
                mailOptions = {
                    from: user,
                    to: user, // Aquí pones la dirección a la que quieres enviar el correo
                    subject: `Mensaje de ${name}`,
                    text: `Nombre: ${name}, Email: ${email}\n Mensaje: \n ${message}`,
                }
            } else {
                mailOptions = {
                    from: user,
                    to: user, // Aquí pones la dirección a la que quieres enviar el correo
                    subject: `Cuenta borrada: ${name}`,
                    text: `Nombre: ${name}, Email: ${email}`
                }
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email enviado: ' + info.response)
                }
            })

            res.send(`\nreq.body:\n${name} ${email} ${message}`)
            // res.json({
            // message: 'Formulario enviado correctamente' });
        })
        app.post('/pay', (req, res) => {
            const { company, email, date, time} = req.body
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: user,
                    pass: pass
                }
            })

            const mailOptions = {
                from: user,
                to: email, // Aquí pones la dirección a la que quieres enviar el correo
                subject: `¡Gracias ${company} por querer colaborar!`,
                text: `Hablemos de como su empresa puede colaborar con SugarCoach, tengamos una reunion el ${date} a las ${time} en (link a meeting) `
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email enviado: ' + info.response)
                }
            })

            res.send(`\nreq.body:\n${company} ${email} ${date}`)
            // res.json({
            // message: 'Formulario enviado correctamente' });
        })

        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto ${port}`)
        })
    } catch (err) {
        console.error(error)
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
