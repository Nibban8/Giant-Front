import axios from 'axios';

const url = 'https://giant-ensambles.herokuapp.com/parts';

export const fetchParts = () => axios.get(url);
export const createPart = (newPart) => axios.post(url, newPart);
