enum Keys {
  PREFERENCES = "gamelog_preferences",
  PLAYING_RESULTS = "gamelog_playing_results",
}

function getItem(key: Keys) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : {};
}

function setItem(key: Keys, value: object) {
  const previousPreferences = getItem(key);
  const preferences = JSON.stringify({
    ...previousPreferences,
    ...value,
  });

  return localStorage.setItem(key, preferences);
}

export const storage = {
  getItem,
  setItem,
  Keys,
};
