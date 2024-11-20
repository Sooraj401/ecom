import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api', // Replace with your backend URL

});

export const signup = (data) => API.post('/artist/signup', data);
export const login = (data) => API.post('/artist/login', data);


// Add Authorization header if needed
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
