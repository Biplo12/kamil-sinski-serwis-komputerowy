const validateMail = (mail: string) => {
  const mailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validMail = mailRegex.test(mail);
  if (!validMail) {
    throw new Error('Invalid email address');
  }
  return validMail;
};

export default validateMail;
