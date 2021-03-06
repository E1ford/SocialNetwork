import * as axios from 'axios';

const API_KEY = 'd684279a-8445-4345-859b-ded69dd011a5';
const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': API_KEY,
  },
});

export const usersAPI = {
  //получить страницы с юзерами возвращает уже готовую дату
  requestGetUsersPage: (currentPages, pageSize) => {
    return instance
      .get(`users?page=${currentPages}&count=${pageSize}`)
      .then((response) => response.data);
  },
  //удаляет подписку на пользователя(unfollow)
  requestDeleteFollowUser: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  //добавляет подписку на пользователя(follow)
  requestPostFollowUser: (userId) => {
    return instance.post(`follow/${userId}`);
  },
  //получение профиля пользователей
  getProfile: (userId) => {
    console.warn('используете старый код');
    return profileAPI.getProfile(userId);
  },
};
export const authAPI = {
  //проверяет аутентификацию
  requestVerifyAuth: () => {
    return instance.get(`auth/me`);
  },
  // логинизация
  authLogin: (email, password, rememberMe = true) => {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout: (email, password, rememberMe = true) => {
    return instance.delete(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
};
export const profileAPI = {
  //получение профиля пользователей
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, { status });
  },
};
