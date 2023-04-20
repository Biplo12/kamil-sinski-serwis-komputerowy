import { createTransport } from 'nodemailer';

type TSendMailFunction = {
  to: string;
  from?: string;
  subject: string;
  text: string;
};

const sendMailFunction = async ({
  to,
  from,
  subject,
  text,
}: TSendMailFunction) => {
  const emailBody = {
    to,
    from: from || process.env.SENDER_EMAIL_ADDRESS,
    subject,
    text,
  };

  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SENDER_EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail(emailBody);
};

export default sendMailFunction;
