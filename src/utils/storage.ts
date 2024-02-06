enum Keys {
  PREFERENCES = "gamelog_preferences",
  PLAYING_RESULTS = "gamelog_playing_results",
  COMPLETED_RESULTS = "gamelog_completed_results",
}

function getItem(key: Keys) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : {};
}

function setItem(key: Keys, value: object) {
  const previousValue = getItem(key);
  const item = JSON.stringify({
    ...previousValue,
    ...value,
  });

  return localStorage.setItem(key, item);
}

export const storage = {
  getItem,
  setItem,
  Keys,
};
