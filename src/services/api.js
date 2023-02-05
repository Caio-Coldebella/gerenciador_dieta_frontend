import axios from 'axios';

//baseURL: process.env.REACT_APP_API_BASE_URL

const instance = axios.create({
  baseURL: 'http://localhost/api/'
});

export default instance;
