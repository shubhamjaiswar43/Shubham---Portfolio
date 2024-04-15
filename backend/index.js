const { google } = require('googleapis');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const TOKEN = process.env.TOKEN;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('workin')
})

async function createEmail({ to, subject, text }) {
    const mail = [
        'Content-Type: text/plain; charset="UTF-8"\n',
        `To: ${to}\n`,
        `Subject: ${subject}\n\n`,
        `${text}`
    ].join('');
    const encodedMail = Buffer.from(mail).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
    return encodedMail;
}

app.post('/sendmail', async (req, res) => {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    const subject = 'New Message from Portfolio Form';
    const { name, email, message } = req.body;
    const text = `Name : ${name}\nEmail : ${email}\nMessage : ${message}`
    oAuth2Client.setCredentials(JSON.parse(TOKEN));

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    const emailMessage = {
        to: RECEIVER_EMAIL,
        subject,
        text
    };

    try {
        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: await createEmail(emailMessage)
            }
        });
        return res.json({ success: true });
    } catch (err) {
        console.error('Error sending email:', err);
        return res.json({ success: false, err });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
