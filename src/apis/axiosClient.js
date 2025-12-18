import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Cache-Control': 'no-cache'
    }
});
export default axiosClient;
