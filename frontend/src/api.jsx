import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // Certifique-se de definir a variável de ambiente
});

export default api;
