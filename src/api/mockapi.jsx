//mockapi.jsx
import axios from 'axios';
const BASE_URL = 'https://api-production.data.gov.sg/v2/public/api/collections/1456https://api-open.data.gov.sg/v1/public/api/datasets/d_c00cbf056265738b684e63e890a113d2';
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI