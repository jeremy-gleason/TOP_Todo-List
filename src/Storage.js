const loadFromStorage = (itemKey) => {
  if (localStorage[itemKey]) {
    return JSON.parse(localStorage.getItem(itemKey));
  } else {
    return [];
  }
};

const saveToStorage = (itemKey, itemVal) => {
  localStorage.setItem(itemKey, JSON.stringify(itemVal));
};

export { loadFromStorage, saveToStorage };