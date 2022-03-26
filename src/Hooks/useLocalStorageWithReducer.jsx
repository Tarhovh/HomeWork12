// This custom hook is created based on this hook
// href="https://github.com/Tweries/useReducerWithLocalStorage"

import { useReducer } from "react";
import useLocalStorage from "./useLocalStorage";

function useReducerWithLocalStorage({ initialArg, key, reducer }) {
  const [localStorageState, setLocalStorageState] = useLocalStorage(
    key,
    initialArg
  );

  return useReducer(
    (state, action) => {
      const newState = reducer(state, action);
      setLocalStorageState(newState);
      return newState;
    },
    [...localStorageState]
  );
}

export default useReducerWithLocalStorage;
