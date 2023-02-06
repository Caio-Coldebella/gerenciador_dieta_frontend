import axios from 'axios';

//baseURL: process.env.REACT_APP_API_BASE_URL
//baseURL: 'http://localhost/api/'
//POSTGRES_HOST=banco
//POSTGRES_HOST=localhost

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost/api'
});

export default instance;
