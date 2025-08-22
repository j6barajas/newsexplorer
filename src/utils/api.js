const API_KEY = "f0fb0bcbd4094a31a4dc4e3e35fca2ce";
const BASE_URL = "https://nomoreparties.co/news/v2/everything";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getNewsCards = (keyword) => {
  const parameters = new URLSearchParams({
    q: keyword,
    apiKey: API_KEY,
    from: getDateWeekAgo(),
    to: getCurrentDate(),
    pageSize: 100,
  });

  return fetch(`${BASE_URL}?${parameters}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

const getDateWeekAgo = () => {
  const currentDate = new Date();
  return new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
};

const getCurrentDate = () => {
  return new Date();
};
