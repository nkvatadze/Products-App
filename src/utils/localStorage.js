export const set = (key, object) => localStorage.setItem(key, JSON.stringify(object));
export const get = (key) => JSON.parse(localStorage.getItem(key));
