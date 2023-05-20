const validateId = (id: number): void => {
  if (isNaN(id) || typeof id !== 'number' || id.toString().length !== 6) {
    throw new Error('Invalid order id');
  }
};

export default validateId;
