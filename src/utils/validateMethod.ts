const validateMethod = (method: string, requestedMethod: string) => {
  if (method !== requestedMethod) {
    throw new Error(`Method ${method} not allowed. Use ${requestedMethod}`);
  }
};

export default validateMethod;
