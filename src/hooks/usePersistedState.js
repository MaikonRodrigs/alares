import { useState, useEffect } from "react";

function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, 500)
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
