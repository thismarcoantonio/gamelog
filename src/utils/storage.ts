// TODO: Move this file to reactive state somewhere
const key = "gamelog_preferences";

function getItem() {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : {};
}

function setItem(value: object) {
  const previousPreferences = getItem();
  const preferences = JSON.stringify({
    ...previousPreferences,
    ...value,
  });

  return localStorage.setItem(key, preferences);
}

export const storage = {
  getItem,
  setItem,
};
