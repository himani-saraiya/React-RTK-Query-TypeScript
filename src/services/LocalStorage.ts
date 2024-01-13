import { AuthState } from "../Store/authSlice";

interface LocalStorageState {
    auth: AuthState;
    
  }
  
  export const loadState = (): LocalStorageState | undefined => {
    try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state: LocalStorageState): void => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (err) {
    }
  };
  
  