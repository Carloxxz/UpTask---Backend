import { transporter } from "../config/nodemailer"

interface IEmail {
    email: string
    name: string
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: IEmail) => {
        const info = await transporter.sendMail({
            from: 'UpTask <admin@uptask.com>',
            to: user.email,
            subject: 'UpTask - Confirma tu cuenta',
            text: 'UpTask - Confirma tu cuenta',
            html: `<p>Hola ${user.name}, confirma tu cuenta</p>
            <p>Visita el siguiente enlace</p>
            <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
            <p>E ingresa el código: <b>${user.token}</b></p>
            <p>El token expira en 10 minutos</p>
            `
        })
        console.log('Mensaje enviado', info.messageId)
    }

    static sendPasswordResetToken = async (user: IEmail) => {
        const info = await transporter.sendMail({
            from: 'UpTask <admin@uptask.com>',
            to: user.email,
            subject: 'UpTask - Restablece tu contraseña',
            text: 'UpTask - Restablece tu contraseña',
            html: `<p>Hola ${user.name}, has solicitado restablecer tu password/p>
            <p>Visita el siguiente enlace</p>
            <a href="${process.env.FRONTEND_URL}/auth/new-password">Confirmar cuenta</a>
            <p>E ingresa el código: <b>${user.token}</b></p>
            <p>El token expira en 10 minutos</p>
            `
        })
        console.log('Mensaje enviado', info.messageId)
    }
}