const validateMail = (mail: string | undefined | null): boolean => {
  const mailRegex = /^\S+@\S+\.\S+$/;
  const validMail = mailRegex.test(mail || '');
  if (!validMail) {
    throw new Error('Invalid email address');
  }
  return validMail;
};

export default validateMail;
