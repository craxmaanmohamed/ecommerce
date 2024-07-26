// src/axios-interceptors.js
import axios from 'axios';
import AuthService from './services/AuthService';

axios.interceptors.request.use(config => {
    const user = AuthService.getCurrentUser();
    if (user && user.accessToken) {
        config.headers['Authorization'] = 'Bearer ' + user.accessToken;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
