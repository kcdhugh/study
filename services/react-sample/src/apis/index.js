import axios from 'axios';

async function fetchAxiosTest() {
  try {
    const resData = axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => res.data);
    console.log('res', resData)
    return resData?.data ?? []
  } catch {
    return [];
  }
}

export {
  fetchAxiosTest,
}