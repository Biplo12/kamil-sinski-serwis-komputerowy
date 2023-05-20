const useDisabledOrderStatuses = (currentState: string): string[] => {
  const availableStates = [
    'new',
    'diagnosing',
    'repairing',
    'repaired',
    'completed',
    'cancelled',
  ];
  const disabledStates = availableStates.filter(
    (state) =>
      availableStates.indexOf(state) <
      availableStates.indexOf(currentState.toLowerCase())
  );
  return disabledStates;
};

export default useDisabledOrderStatuses;
