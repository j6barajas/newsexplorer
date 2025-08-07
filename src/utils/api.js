const API_KEY = "your-api-key-here";
const BASE_URL = "https://newsapi.org/v2/everything";

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({
      token: "some fake token",
    });
  });
};

export const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    resolve({
      username,
      email,
      password,
    });
  });
};

export const getCurrentUser = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      username: "user",
    });
  });
};
