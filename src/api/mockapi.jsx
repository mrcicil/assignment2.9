//mockapi.jsx
import axios from 'axios';
const BASE_URL = 'https://api.data.gov.sg/v1';
const mockAPI = axios.create({ baseURL: BASE_URL });

//https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast
export default mockAPI