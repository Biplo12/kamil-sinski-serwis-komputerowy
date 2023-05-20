const validateStatus = (status: string): void => {
  const validStatus = [
    'diagnosing',
    'repairing',
    'repaired',
    'completed',
    'cancelled',
  ];
  if (!validStatus.includes(status)) {
    throw new Error('Invalid status');
  }
};

export default validateStatus;
