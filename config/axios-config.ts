import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
//   headers: {
//     Authorization: `Token <YOUR_ACCESS_TOKEN>`,
//   },
});

export default instance;
