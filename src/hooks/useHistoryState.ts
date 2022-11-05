import React from "react";

export default function useHistoryState<T>(
  key: string,
  defaultTo: T
): [T, (value: T) => void] {
  const [state, rawSetState] = React.useState(() => {
    const value = window.history.state && window.history.state[key];
    return value || defaultTo;
  });

  function setState(value: T) {
    window.history.replaceState(
      { ...window.history.state, [key]: value },
      document.title
    );
    rawSetState(value);
  }

  return [state, setState];
}
