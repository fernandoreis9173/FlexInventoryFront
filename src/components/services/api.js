import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.113.162.132:3333/'
    
});

export default api;
