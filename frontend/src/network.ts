import axios from 'axios';

export const getData = async () => {
  const data: string = await axios.get('http://localhost:3000');
  return data; 
}