export function useLocalStorage() {
  const getLocalStorage = (key, json = false) => {
    const storedValue = localStorage.getItem(key);
    if(json){
      return storedValue ? JSON.parse(storedValue) : null;
    }

    return storedValue ? storedValue : null;
  };

  const setLocalStorage = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}
