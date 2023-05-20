const missingArguments = (args: Record<string, any>): void => {
  const missingArguments: string[] = [];
  for (const [key, value] of Object.entries(args)) {
    if (!value) {
      missingArguments.push(key);
    }
  }
  if (missingArguments.length > 0) {
    throw new Error(`Missing arguments: ${missingArguments.join(', ')}`);
  }
};

export default missingArguments;
