const validateId = (id: number) => {
  if (typeof id !== 'number') {
    throw new Error(`Invalid order id. Expected number, got ${typeof id}`);
  }
  if (id.toString().length !== 6) {
    throw new Error('Invalid order id');
  }
};

export default validateId;
