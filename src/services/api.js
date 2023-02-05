import axios from 'axios';

//baseURL: process.env.REACT_APP_API_BASE_URL
//baseURL: 'http://localhost/api/'
//POSTGRES_HOST=banco
const instance = axios.create({
  baseURL: 'http://localhost/api/'
});

export default instance;
