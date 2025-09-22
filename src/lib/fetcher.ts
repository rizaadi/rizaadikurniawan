import axios from 'axios';

const fetcher = (url: string) => axios(url).then((res) => res.data);
export default fetcher;
