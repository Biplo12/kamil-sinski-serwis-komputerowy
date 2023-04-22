/* eslint-disable @typescript-eslint/no-explicit-any */
export default function missingArguments(args: any) {
  const missingArguments = [];
  for (const [key, value] of Object.entries(args)) {
    if (!value) {
      missingArguments.push(key);
    }
  }
  return missingArguments;
}
