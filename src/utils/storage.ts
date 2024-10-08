export const storeKeys = {
  userdata: 'fundit-user',
};

export const getItemFromStorage = (key: string, isJson = true) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = localStorage.getItem(key);

  if (value == null) return null;

  if (isJson) return JSON.parse(value);

  return value;
};

export const setItemInStorage = (key: string, value: any, isJson = true) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (isJson) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } else {
    localStorage.setItem(key, value);
  }
};

export const removeItemFromStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(key);
};

export const updateStepDataInStorage = (
  key: string,
  step: string,
  data: any,
) => {
  if (typeof window === 'undefined') {
    return;
  }

  const storedData = getItemFromStorage(key) || {};
  storedData[step] = data;
  setItemInStorage(key, storedData);
};
