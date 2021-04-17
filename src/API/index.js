import axios from 'axios';

const url = 'http://localhost:5000/parts'; // Cambiar a parts

export const fetchParts = () => axios.get(url);
export const createPart = (newPart) => axios.post(url, newPart);
