import axios from 'axios';

const url = 'http://localhost:5000/posts'; // Cambiar a parts

export const fetchParts = () => axios.get(url);
