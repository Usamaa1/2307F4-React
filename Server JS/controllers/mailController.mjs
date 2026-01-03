
import nodemailer from 'nodemailer'
const sendMail = async (req, res) => {


    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "usamariaz@aptechnorth.edu.pk",
                pass: "avpb hzvv hbym eesu",
            },
        });


        const mailResponse = await transporter.sendMail(
            {
                from: "usamariaz@aptechnorth.edu.pk",
                to: req.body.toEmail,
                subject: req.body.subject,
                html: req.body.mailMessage,
            }
        )

        res.send({ message: mailResponse.messageId })



    } catch (error) {
        console.log(error)
        res.send({ errorMessage: error })
    }




}

export default sendMail;