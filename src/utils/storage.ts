import { PaginatedResults } from "../data";

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

function setPaginatedItem(key: Keys, pagination: PaginatedResults) {
  const previousValue = getItem(key);
  const value = JSON.stringify({
    page: pagination.page,
    count: previousValue.count,
    hasNextPage: pagination.hasNextPage,
    results: [...(previousValue.results || []), ...pagination.results],
  });

  return localStorage.setItem(key, value);
}

export const storage = {
  getItem,
  setItem,
  setPaginatedItem,
  Keys,
};
