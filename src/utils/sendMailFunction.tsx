import { render } from '@react-email/render';
import { createTransport } from 'nodemailer';

import { EmailTemplate } from './EmailTemplate';

type TSendMailFunction = {
  to: string;
  from?: string;
  subject: string;
  values?: {
    firstname: string;
    lastname: string;
    orderId: number;
  };
};

const sendMailFunction = async ({
  to,
  from,
  subject,
  values,
}: TSendMailFunction) => {
  const emailHtml = render(
    <EmailTemplate
      firstName={values?.firstname}
      lastName={values?.lastname}
      orderId={values?.orderId}
    />
  );

  const emailBody = {
    to,
    from: from || process.env.SENDER_EMAIL_ADDRESS,
    subject,
    html: emailHtml,
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
